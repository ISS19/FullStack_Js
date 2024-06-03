const ChatModel = require('../model/chat.model');
const ObjectId = require("mongoose").Types.ObjectId;

module.exports.addMessage = async (req, res, next) => {
    try {
        const { from, to, message } = req.body;
        const data = await ChatModel.create({
            message: {
                text: message,
                users: [from, to],
                sender: from,
            },
        });

        if (data) return res.json({ msg: "Envoyé" });
        return res.json({ msg: "Non Envoyé" });
    } catch (err) {
        next(err);
    }
};

module.exports.getAllMessages = async (req, res) => {
    const { from, to } = req.body;
    if (!ObjectId.isValid(from) && !ObjectId.isValid(to))
    return res.status(400).send("Id " + from + " and " +to+ " not found");

    try {
        const message = await ChatModel.find({
            users: {
                $all: [from, to],
            }
        })

        const projectMessage = message.map((msg) =>{
            return {
                fromSelf: msg.sender.toString() === from,
                message: msg.message.text,  
            }
        })
        res.status(201).json(projectMessage);
    }catch(Err){
        next(Err);
    }
};
