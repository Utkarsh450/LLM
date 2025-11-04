let myapp = require("./src/app");
const logger = require("./src/logger/logger").logger;
const connectToDB = require("./src/db/db");
const http = require("http");
const httpServer = http.createServer(myapp);
const initSocketServer = require("./src/sockets/server.sockets");

connectToDB();
initSocketServer(httpServer);


httpServer.listen(3001, ()=>{
    logger.info("Server is running at port 3001");
})

