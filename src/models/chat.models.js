const mongoose = require("mongoose");
const chatSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    title: {
        type: String,
        required: true,
        maxLength: 100,
    },
    lastActivity: {
        type: Date,
        default: Date.now,
    },
    }, {
        timestamps: true
    });

const model = mongoose.model("chat", chatSchema);
module.exports = model;