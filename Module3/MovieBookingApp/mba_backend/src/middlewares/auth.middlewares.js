const userModel = require("../models/user.model");
const { userTypes, userStatus } = require("../utils/constant");

const verifySignUpRequest=async (req,res,next)=>{

    const {name, userId, email, userType, password} = req.body;

    if(!name){
        return res.status(400).send({message:"Name is not provided"});
    }

    if(!userId){
        return res.status(400).send({message:"UserId is not provided"});
    }

    if(!email){
        return res.status(400).send({message:"Email is not provided"});
    }

      if(!password){
        return res.status(400).send({message:"Password is not provided"});
    }

    try{
    const user= await userModel.find({
        $or:[{userId:userId},{email:email}]
    })

    console.log(user);

    if(user.length){
    return res.status(400).send({message:"EmailId or UserId already exists"}); 
    }
    }
    catch(err){
        return res.status(500).send({message:"Something went wrong"})
    }

    if(userType && !Object.values(userTypes).includes(userType)){
        return res.status(400).send({message:`UserTypes should be among ${Object.values(userTypes)}`});
    }

    next();
}


const verifySignInRequest=async (req,res,next)=>{

    const {userId, password} = req.body;

   if(!userId){
        return res.status(400).send({message:"UserId is not provided"});
    }

      if(!password){
        return res.status(400).send({message:"Password is not provided"});
    }

        try{
        const user = await userModel.findOne({userId});

        if(!user){
            return res.status(400).send({message:"UserId doesn't exists"});
        }

         if(!(user.userStatus===userStatus.approved)){
            return res.status(400).send({message:"User status is not approved"});
        }

        req.metaData={...req.metaData, user};
    }
              catch(err){
        return res.status(500).send({message:"Something went wrong"})

    }

    next();
}


module.exports={
    verifySignInRequest,
    verifySignUpRequest
}