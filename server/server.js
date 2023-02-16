const express=require('express')
require('dotenv').config();
var bodyParser = require('body-parser')

const app=express()
const mongoose=require('mongoose')
const sneakerRoutes=require('./routes/sneakers')

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));



app.get('/',(req,res)=>{
   console.log(req.body)
   res.json({mssg:'Welcome to the app',request:req.body})
})

app.use('/api/sneakers',sneakerRoutes)

mongoose.connect('mongodb+srv://jairajani:jairajani@shopwise.6twmxrd.mongodb.net/ShopWIse?retryWrites=true&w=majority')
    .then(()=>{
        
    app.listen(process.env.PORT,()=>{
        console.log('Listening on port 4000')
    })

    })
    .catch((error)=>{
        console.log(error)
    })


