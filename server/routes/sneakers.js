const express=require('express')
const router=express.Router()
const {getSneakers, getResellers, getSneaker}=require('../controllers/sneakerController')
//get all sneakers

router.get('/',getSneakers)
router.post('/sneaker',getSneaker)



module.exports=router
