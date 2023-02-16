const mongoose=require('mongoose')
const Sneaker = require('../models/Sneaker')

const getSneakers=async(req,res)=>{
    try{
    let page = req.query.page??1;
    console.log(page)
    let limit = 30;
    const sneakers=await Sneaker.find({}).skip((page * limit) - limit).limit(limit)
    res.status(200).json(sneakers)
    }
    catch(error){
        res.json({message:error})
    }
}

module.exports={
    getSneakers
}