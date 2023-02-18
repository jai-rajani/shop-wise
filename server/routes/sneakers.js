const express=require('express')
const router=express.Router()
const {getSneakers, getResellers}=require('../controllers/sneakerController')
//get all sneakers

router.get('/',getSneakers)



module.exports=router
