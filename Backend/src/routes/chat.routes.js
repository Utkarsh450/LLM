const express = require("express");
const { createChat, getChats, getMessages, uploadsController } = require("../controllers/chat.controller");
const authUser = require("../middlewares/auth.middleware");
const router = express.Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage()})

/* POST - /api/chat/createChat */
router.post("/createChat", authUser, createChat)
/* GET - /api/chat/getChats */
router.get("/getChats", authUser, getChats)
/* GET - /api/chat/getMessages/:chatId */
router.get("/:chatId", authUser, getMessages)

router.post("/uploads",authUser, upload.array("files", 5), uploadsController);
module.exports = router;
