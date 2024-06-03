const router = require("express").Router();
const chatController = require("../controllers/chat.controller");

router.post("/addMessage", chatController.addMessage);
router.get("/getAllMessages", chatController.getAllMessages);

module.exports = router;