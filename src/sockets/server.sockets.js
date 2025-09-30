const { Server } = require("socket.io");
const logger = require("../logger/logger").logger;
const cookie = require("cookie");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.models");
const messageModel = require("../models/messages.models");
const {generateVector, generateResponse} = require("../services/ai.service");
const { createMemory, queryMemory } = require("../services/vector.service");

async function initSocketServer(httpServer) {
  const io = new Server(httpServer, {});

  io.use(async (socket, next) => {
    const cookies = cookie.parse(socket.handshake.headers?.token || "");
    

    if (!cookies.token) {
      next(new Error("Authentication error: No token provided"));
    }

    try {
      const decoded = jwt.verify(cookies.token, process.env.JWT_SECRET);

      const user = await userModel.findById(decoded.id);

      socket.user = user;

      next();
    } catch (err) {
      next(new Error("Authentication error: Invalid token"));
    }
});

  io.on("connection", (socket) => {
    logger.info("A user connected: " + socket.id);

    socket.on("ai-message", async(messagesPayload) => {
        // logger.info(JSON.stringify(messagesPayload));

     const messages = await messageModel.create({
            chat: messagesPayload.chat,
            user: socket.user._id,
            content: messagesPayload.content,
            role: "user",
        })
        const vector = await generateVector(messagesPayload.content);
        await createMemory({
            vectors: vector,
            messageId: messages._id,
            metadata: {
                user: socket.user._id,
                chat: messagesPayload.chat,
                text: messagesPayload.content,
            }
        })

        const memory = await queryMemory({
            queryVector: vector,
            limit: 5,
            metadata: {
                user: socket.user._id,
            }
        })
        const chatHistory = await messageModel.find({ chat: messagesPayload.chat }).sort().lean().limit(20);
        const ltm = [
      {
        role: "user",
        parts: [
          {
            text: `
These are some previous messages from the chat. Use them to generate a response:
${memory.map((item) => item.metadata.text).join("\n")}
            `,
          },
        ],
      },
    ];
        
        const stm = chatHistory.map(elem => {
            return {
                role: elem.role,
                parts: [ { type: "text", text: elem.content } ]
            }
        })
        
        const aiResponse = await generateResponse([...ltm]);
        await messageModel.create({
            chat: messagesPayload.chat,
            user: socket.user._id,
            content: aiResponse,
            role: "model",
        })
        const aiVector = await generateVector(aiResponse);
        await createMemory({
            vectors: aiVector,
            messageId: messages._id,
            metadata: {
                user: socket.user._id,
                chat: messagesPayload.chat,
                text: aiResponse,
            }
        })
        socket.emit("ai-response", aiResponse);
    })

    socket.on("disconnect", () => {
      logger.info("User disconnected: " + socket.id);
    });
  });
}

module.exports = initSocketServer;
