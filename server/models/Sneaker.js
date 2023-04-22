const mongoose=require('mongoose')

const Schema=mongoose.Schema

const sneakerSchema=new Schema({
    Title:{
    type:String,
    
    },
    Description:{
        type:String},
    CurrentPrice:{type:String},
    ProductUrl:{type: String},
    ImageUrl:{type:String},
    Store:{type:String}

},
{
    collection:'Sneakers'
})
module.exports=mongoose.model("Sneaker",sneakerSchema)
