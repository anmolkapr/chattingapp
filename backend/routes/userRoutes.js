const express = require("express");
const { registerUser,authUser, Allusers } = require("../controllers/userControllers");
const { protect } = require("../middlewares/authmiddleware");

const router = express.Router();

router.route("/").post(registerUser).get(protect,Allusers);
router.post("/login",authUser);



module.exports = router;