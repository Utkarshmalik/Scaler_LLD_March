

var jwt = require('jsonwebtoken');
const UserModel = require('../Models/user.model');
const { userTypes } = require('../utils/constants');



const verifyToken  =  (req,res,next)=>{
    
    const tokenString = req.headers['x-access-token'];

    if(!tokenString){
        return res.status(403).send({message:"No Token is provided"});
    }

    const token  = tokenString.split(' ')[1];

    jwt.verify(token,"myrandmomsecret", async (err,payload)=>{

        if(err){
            return res.status(403).send({message:"Invalid JWT token"});
        }

        const userId  = payload.id;

        try{

            const user = await UserModel.findOne({userId:userId});
            req.userDetails = user;

        }
        catch(err){

        }

        next();
    })
}

const verifyAdminOrSeller = (req,res,next) => {

    const userDetails  = req.userDetails;

    const userType = userDetails.userType;

    if(  userType!=userTypes.admin && userType !==userTypes.seller){
        
        return res.status(403).send({message:"OOPS! you are not authorised to acccess this route"})
    }

    next();

}

const verifyAdmin = (req,res,next) => {

     const userDetails  = req.userDetails;

    const userType = userDetails.userType;

     if(userType!=userTypes.admin){
        return res.status(403).send({message:"OOPS! you are not authorised to acccess this route"})
    }

    next();

}


module.exports =  {
    verifyToken,
    verifyAdminOrSeller,
    verifyAdmin
}