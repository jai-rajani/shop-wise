const { query } = require('express');
const mongoose=require('mongoose')
const dotenv = require('dotenv');
const Sneaker = require('../models/Sneaker')


const getSneakers=async(req,res)=>{
    try{

    //pagination for infinite scrolling
    let page = req.query.page??1;
    let limit = 30;

    let query={}
    let sort={'AddedDate':-1}

    //filter for resller site
    if(req.query.reseller!=undefined) {
        console.log(req.query)
        if(req.query.reseller.length==0){
        
        }
        else{
            query['Store']={'$in':req.query.reseller}
            //console.log('query is ',query)
        }
    }
   

    //search for product
    if(req.query.search!=undefined){
        if(req.query.search!=''){
            let search=req.query.search.replaceAll("'","")
            let query2={}
            let query3={}
            query2['Description']={'$regex':search,'$options':'i'}
            query3['Title']={'$regex':search,'$options':'i'}
            query['$or']=[query3,query2]
        }
    }

    //sort for product
    if(req.query.sort!=undefined){
        if(req.query.sort!=''){
            console.log('sort s thus ',req.query.sort)
            switch(req.query.sort){
                case 'asc':{
                    sort={'CurrentPrice':1}
                    break;
                }
                case 'desc':{
                    sort={'CurrentPrice':-1}
                    break;
                }
            }

        }
    }

    //send request
    console.log('query is ',query)
    console.log('sort type is ',sort)
    const sneakers=await Sneaker.find(query).sort(sort).skip((page * limit) - limit).limit(limit)
    res.status(200).json(sneakers)
    
}
    catch(error){
        res.json({message:error})
    }
}

//get a single sneaker
const getSneaker=async(req,res)=>{
    const {url}=req.body;

    try{
        const sneaker=await Sneaker.findOne({ProductUrl:url})
        return res.status(200).json(sneaker);
    }
    catch(errors){
        return res.status(500).json({
            ok:false,
            msg:'Please conatct admin'
        })
    }

}



module.exports={
    getSneakers,getSneaker
    
}