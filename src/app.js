const express = require('express');
require('dotenv').config();
const app = express();
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.routes');
const chatRoutes = require('./routes/chat.routes');

app.use(express.json())
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);

module.exports = app;