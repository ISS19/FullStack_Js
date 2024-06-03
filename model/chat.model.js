const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema(
    {
        message: {
            text: {
                type: String,
                required: true
            },
            users: Array,
            sender: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "user",
                required: true,
            },
        },
    },
    {
        timestamps: true, 
    }
);

const ChatModel = mongoose.model("Chat", chatSchema);

module.exports = ChatModel;
