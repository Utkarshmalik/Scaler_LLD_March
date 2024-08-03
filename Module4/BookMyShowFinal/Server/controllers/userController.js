const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sendEmail } = require("../utils/NotificationUtil");


const signUp = async  (req, res) => {
  try {
    if (req.body.email == undefined || req.body.password == undefined) {
      return res.status(401).json({
        status: "failure",
        message: "Please enter the email and password for registration"
      })
    }
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
      res.send({
        success: false,
        message: "The user already exists!",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPwd = bcrypt.hashSync(req.body.password, salt);
    req.body.password = hashPwd;
    const newUser = await User(req.body);
    await newUser.save();
    // console.log(newUser);
    res.send({
      success: true,
      message: "You've successfully signed up, please login now!",
    });
  } catch (err) {
    console.log(err);
  }
}


const login = async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.send({
        success: false,
        message: "user does not exist Please Register",
      });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      res.send({
        success: false,
        message: "Sorry, invalid password entered!",
      });
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    res.send({
      success: true,
      message: "You've successfully logged in!",
      token: token,
    });
  } catch (error) {
    console.error(error);
  }
}


const getCurrentUser = async (req,res)=> {

    return res.send({
        success:true,
        message:"Returning user Details",
        data:req.userDetails
    })

}


const forgetPassword  =  async (req,res)=>{

  const email = req.body.email;

  if(!email){
    return res.status(401).send({
      success:false,
      message:"Please enter email for forget password"
    })
  };


  try{

      let user  = await User.findOne({email:req.body.email});

      if(user==null){
        return res.status(404).send({
      success:false,
      message:"User not found for this email"
    })
      }


      //email is correct 
      const otp = otpGenerator();

      user.otp = otp;
      user.otpExpiry =  Date.now() +  10*60*10000;

      await user.save();


      //send to email 
      console.log("Sent the following OTP to email ", otp);
      sendEmail(
        [user.email], 
        "OTP for Verification",
      `<div> <h1> OTP : ${otp}  </div> `
      , null);


      res.status(200).send({
        status:"success",
        message:"OTP Sent to your email"
      })

  }
  catch(err){

  }



}

const resetPassword =  async (req,res)=>{

  //otp , newPassword 


  const {otp, password} = req.body;

  if(!otp || !password){
      return res.status(401).json({
        status: "failure",
        message: "invalid request"
      })
  }


  //find the user i attached this otp with 

  try{
     const user = await User.findOne({otp:otp});


     if(user==null){
       return res.status(404).json({
        status: "failure",
        message: "OTP is incorrect"
      })
     }

     //otp has expired 

     if(Date.now() > user.otpExpiry){
      return res.status(404).json({
        status: "failure",
        message: "OTP is expired"
      })
     }



     const salt = await bcrypt.genSalt(10);
    const hashPwd = bcrypt.hashSync(password, salt);


     user.password = hashPwd;

     user.otp=null;
     user.otpExpiry = null;

     await user.save();


     return res.status(200).send({
      status:"success",
      message:"Password Reset Successful"
     })


  }catch(err){


  }



}

module.exports = {
    signUp,
    login,
    getCurrentUser,
    forgetPassword,
    resetPassword
}



function otpGenerator(){
      return   Math.floor(((Math.random() * 10000)+ 90000));
}