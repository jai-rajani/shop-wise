const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  sneakers:[
    {
        sneakerPrice:Number,
        sneakerDate:Date,
        sneakerURL:String,
        sneakerID:{type: Schema.Types.ObjectId, ref: 'sneakers'}
    }
  ]
 /*  sneakers:[
    {
        sneakerPrice:Number,
        sneakerDate:Date,
        sneakerTitle:String,
        sneakerStore:String,
    }
  ] */
},{
    collection:'Users'
});


module.exports = model("User", UserSchema);
