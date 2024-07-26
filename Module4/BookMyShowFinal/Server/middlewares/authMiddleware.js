const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const verifyToken  =  (req,res,next)=>{
    
    const tokenString = req.headers['x-access-token'];

    if(!tokenString){
        return res.status(403).send({message:"No Token is provided"});
    }

    const token  = tokenString.split(' ')[1];

    jwt.verify(token,process.env.SECRET_KEY, async (err,payload)=>{

        if(err){
            return res.status(403).send({message:"Invalid JWT token"});
        }

        const userId  = payload.userId;

        try{

            const user = await User.findById(userId);
            req.userDetails = user;
        }
        catch(err){

        }

        next();
    })
}



const verifyAdmin = (req,res,next) => {

     const userDetails  = req.userDetails;
   

     if(!userDetails.isAdmin){
        return res.status(403).send({message:"OOPS! you are not authorised to acccess this route"})
    }

    next();

}


module.exports = {
    verifyToken,
    verifyAdmin
}