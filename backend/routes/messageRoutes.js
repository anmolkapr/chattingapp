const express = require("express") ;
const { sendMessage,allMessages } = require("../controllers/messageControllers");
const { protect } = require("../middlewares/authMiddleware");
const Router = express.Router();

Router.route("/").post(protect,sendMessage);
Router.route("/:chatId").get(protect,allMessages);

module.exports = Router;