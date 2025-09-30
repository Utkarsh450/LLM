const express = require("express");
const { createChat, getChats, getMessages } = require("../controllers/chat.controller");
const authUser = require("../middlewares/auth.middleware");
const router = express.Router();

/* POST - /api/chat/createChat */
router.post("/createChat", authUser, createChat)
/* GET - /api/chat/getChats */
router.get("/getChats", authUser, getChats)
/* GET - /api/chat/getMessages/:chatId */
router.get("/getMessages/:chatId", authUser, getMessages)

module.exports = router;