const { Router } = require("express");
const { createUser, loginUser, addSneaker, getSneakers, deleteSneaker } = require("../controllers/userController");
const router = Router();


router.post('/register',createUser)
router.post('/login',loginUser)
router.post('/add',addSneaker)
router.post('/get',getSneakers)
router.post('/delete',deleteSneaker)

module.exports=router

