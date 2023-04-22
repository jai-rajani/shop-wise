const { Router } = require("express");
const { createUser, loginUser, addSneaker } = require("../controllers/userController");
const router = Router();


router.post('/register',createUser)
router.post('/login',loginUser)
router.post('/add',addSneaker)

module.exports=router

