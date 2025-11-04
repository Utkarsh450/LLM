const chatModel = require("../models/chat.models");
const messageModel = require("../models/messages.models");
const uploadFiles = require("../services/storage.services");
const logger = require("../logger/logger").logger;
async function createChat(req, res) {
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ message: "Title is required" });
    }
    const chat = await chatModel.create({
        title: title,
        user: req.user._id,
    });
    return res.status(201).json({ message: "Chat created successfully", chat });
}
async function getChats(req, res) {
    const userId = req.user._id;
    const chats = await chatModel.find({ user: userId }).sort({ lastActivity: -1 });
    return res.status(200).json({ chats });
}

async function getMessages(req, res) {
    const { chatId } = req.params;
    if (!chatId) {
        return res.status(400).json({ message: "Chat ID is required" });
    }
    const messages = await messageModel.find({ chat: chatId }).sort({ createdAt: 1 });
    return res.status(200).json({ messages });
}


async function uploadsController(req, res) {
    try {
        const files = req.files;
        if (!files || files.length === 0) {
            return res.status(400).json({ message: "No files uploaded" });
        }

        const uploadedFiles = await Promise.all(
            files.map(file => uploadFiles(file))
        );

        const urls = uploadedFiles.map(file => file.url);

        return res.status(200).json({
            message: "Files uploaded successfully",
            urls,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Upload failed", error });
    }
}


module.exports = { createChat, getChats, getMessages, uploadsController };