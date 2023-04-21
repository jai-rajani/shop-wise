const express=require('express')
require('dotenv').config();
var bodyParser = require('body-parser')
const dotenv=require('dotenv')

const app=express()
const mongoose=require('mongoose')
const sneakerRoutes=require('./routes/sneakers')
const userRoutes=require('./routes/users')

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));


dotenv.config();  

const MONGO_URI = process.env.MONGO_URI;


app.get('/',(req,res)=>{
   console.log(req.body)
   res.json({mssg:'Welcome to the app',request:req.body})
})

app.use('/api/sneakers',sneakerRoutes)
app.use('/api/user',userRoutes)

mongoose.connect(MONGO_URI)
    .then(()=>{
        
    app.listen(process.env.PORT,()=>{
        console.log('Listening on port 4000')
    })

    })
    .catch((error)=>{
        console.log(error)
    })


