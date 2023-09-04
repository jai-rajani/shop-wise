const bcryptjs = require("bcryptjs");
const User = require("../models/User");
const generateJWT = require("../helpers/jwt");
const Sneaker = require("../models/Sneaker");

const createUser = async (req, res) => {
    console.log(req.body)
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
  
      if (user) {
        return res
          .status(400)
          .json({ ok: false, msg: "User email already exists" });
      }
  
      user = new User(req.body);
  
      // Encrypt password
      const salt = bcryptjs.genSaltSync();
      user.password = bcryptjs.hashSync(password, salt);
  
      await user.save();
  
      const token = await generateJWT(user.id, user.name);
  
      return res.status(200).json({
        ok: true,
        user,
        token,
        navigate:'/profile',
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        ok: false,
        msg: "Please, contact the administrator",
      });
    }
  };
  
  const loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(400).json({
          ok: false,
          msg: "User email does not exist",
        });
      }
  
      // Verify if passwords match
      const validPassword = bcryptjs.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(401).json({
          ok: false,
          msg: "Invalid password.",
        });
      }
  
      const token = await generateJWT(user.id, user.name);
  
      return res.status(200).json({
        ok: true,
        user,
        token,
        navigate:'/'
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        ok: false,
        msg: "Please, contact the administrator",
      });
    }
  };


  //add sneaker to user collection
  const addSneaker=async(req,res)=>{
    const {url,email,price,date}=req.body
    let query={ProductUrl:url}
    console.log(query)
    try{

    const sneaker=await Sneaker.findOne(query);
    //console.log(sneaker)
   
    let user_sneaker=await User.findOne({email:email,'sneakers':{$elemMatch:{sneakerID:sneaker._id}}})
    console.log(user_sneaker)
    if(!user_sneaker){

        try{
        const user=await User.findOneAndUpdate({email:email},{$push:{'sneakers':{sneakerPrice:(price),sneakerDate:date,sneakerID:sneaker._id,sneakerURL:url}}});
        return res.status(200).json({
          ok:true,
          msg:'added sneaker',
          sneakers:user.sneakers,
      })

        }
        catch(error){
          console.log(error);
          return res.status(500).json({
            ok: false,
            msg: 'Couldnt update',
          });
        }
  }
  else{
    return res.status(500).json({
      ok:false,
      msg:'Sneaker already added'
    })
  }
  }
  catch(error){
    console.log(error);
      return res.status(500).json({
        ok: false,
        msg: "Could not find sneaker",
      });

  }}

  //get sneakers from user
  const getSneakers=async(req,res)=>{
    const {email}=req.body;
    try{
    const user=await User.findOne({email:email});
    return res.status(200).json({
      ok:true,
      sneakers:user.sneakers
    })
    }
    catch(errors){
      console.log(errors);
      return res.status(500).json({
        ok: false,
        msg: "Please, contact the administrator",
      });

    }

  }

  //delete sneaker from list
  const deleteSneaker=async(req,res)=>{
    const {email,url}=req.body;



    let user_sneaker=await User.findOne({email:email,'sneakers':{$elemMatch:{sneakerURL:url}}});
    if(user_sneaker){
      try{
        await User.findOneAndUpdate({user_email:email},{$pull:{sneakers:{sneakerURL:url}}})
        return res.status(200).json({
          ok:true,
          msg:'deleted',
        })

      }
      catch(errors){
          console.log(errors);
        return res.status(500).json({
          ok: false,
          msg: "Please, contact the administrator",
        });

      }

    }
    else{
      return res.status(500).json({
        ok:false,
        msg:"Sneaker doesnt exist",
      })
    }

  }




module.exports = {createUser,loginUser,addSneaker,getSneakers,deleteSneaker};