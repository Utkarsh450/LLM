const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    fullName: {
        firstName: {
            type: String,
            required: true,
            maxLength: 30
        },
        lastName: {
            type: String,
            required: true,
            maxLength: 30,
    },
},
    password: {
        type: String,
        minLength: 8
    }

})

const model = mongoose.model("user", userSchema);
module.exports = model;