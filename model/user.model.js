const mongoose = require("mongoose");
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema(
    {
        nom: {
            type: String,
            trim: true,
            maxlength: 50,
        },
        email: {
            type: String,
            required: true,
            validate: [isEmail],
            unique: true,
            lowercase: true,
            trim: true
        },
        mdp: {
            type: String,
            required: true,
            max: 1024,
            minlength: 6
        },
        numTel: {
            type: String,
            maxlength: 13,
        },
        status: {
            type: String,
            maxlength: 20,
            required: true
        }
    },
    {
        timestamp: true
    }
)

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;