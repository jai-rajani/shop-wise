const { Router } = require("express");
const { createUser, loginUser } = require("../controllers/userController");
const router = Router();


router.post('/register',createUser)
router.post('/login',loginUser)

module.exports=router

