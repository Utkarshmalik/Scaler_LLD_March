const jwt = require("jsonwebtoken");
const { SECRET } = require("../configs/server.configs");
const { userStatus, userTypes } = require("../utils/constant");
const userModel = require("../models/user.model");
const bookingModel = require("../models/booking.model");



const verifyToken = async (req,res,next)=>{

    let token = req.headers['x-access-token'];

    if(!token){
        return res.status(403).send({message:"No Token Provided"});
    }
    
    jwt.verify(token, SECRET, async (err,payload)=>{

        if(err){
            return res.status(401).send({message:"Invalid access token Token provided"});
        }

        req.userId = payload.userId;

    const user = await userModel.findOne({userId:payload.userId});
    req.user=user;

        next();
    })

}


const isAdmin = async (req,res,next)=>{

    const {userId} = req;

    try{
        const user = await userModel.findOne({userId});

        if(user.userType===userTypes.admin){
            next();
           return;
        }

        return res.status(403).send({message:"You need to have admin permission to access this route"});

    }catch(err){
            return res.status(500).send({message:"Internal Server Error"});
    }

}


const isAdminOrSelfBooking = async (req,res,next)=>{

        const {userId} = req;
        const bookingId = req.params.id;

            try{
        const user = await userModel.findOne({userId});
        const booking  = await bookingModel.findById(bookingId);

        if(user.userType===userTypes.admin ||  (JSON.stringify(user._id)===JSON.stringify(booking.user))){
            next();
           return;
        }

        return res.status(403).send({message:"This booking doesnt belong to you "});

    }catch(err){
            return res.status(500).send({message:"Internal Server Error"});
    }

}

module.exports={
    verifyToken,
    isAdmin,
    isAdminOrSelfBooking
}