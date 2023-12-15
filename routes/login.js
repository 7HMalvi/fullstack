const router = require("express").Router();

const User = require("../models/userModel");

const { signUp, login, getSignUp, logout } = require("../controllers/loginUser");
const { hashPassword } = require("../middlewares/userMiddleware");

router.post("/signup",hashPassword, signUp);

 router.post("/login", login);

router.get("/signup", getSignUp);

router.get("/logout", logout);

module.exports = router;