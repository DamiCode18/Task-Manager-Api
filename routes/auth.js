const express = require("express");
// const { createUser, loginUser } = require('../controllers/auth');
const { register } = require("../controllers/auth/register");
const { login } = require("../controllers/auth/login");
const router = express.Router();

router.route("/login").post(login);
router.route("/register").post(register);

module.exports = router;
