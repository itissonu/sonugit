const express = require('express');
const { register, login,registerroom } = require('../controler/authfun');
const router = express.Router();

router.post("/register",register)
router.post("/login",login)
router.post("/registerroom",registerroom)
module.exports = router;