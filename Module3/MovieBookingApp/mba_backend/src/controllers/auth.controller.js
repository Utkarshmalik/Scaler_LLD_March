const bcrypt = require("bcrypt");
const { userTypes, userStatus } = require("../utils/constant");
const userModel = require("../models/user.model");
const jwt= require("jsonwebtoken");
const { SECRET } = require("../configs/server.configs");
const { sendEmail } = require("../utils/NotificationUtils");
const { registerUser } = require("../scripts/emailScripts");

exports.signUp=async (req,res)=>{

    var {name, userId, password, email, userType} = req.body;

    if(!userType){
        userType = userTypes.customer;
    }


    const userObj={
        name,
        userId,
        email,
        password: bcrypt.hashSync(password, 8),
        userType, 
        userStatus : (userType===userTypes.customer) ? userStatus.approved : userStatus.pending
    }

    try{

        const user = await userModel.create(userObj);

        const {subject,text,html} = registerUser(user);

        sendEmail([user.email],subject,html,text);

        return res.status(201).send(user);
        
    }
    catch(err){
        return res.status(500).send({message:`Internal Server Error :[${err}]`})
    }

}


exports.signIn = async (req,res)=>{

    const {userId, password} =  req.body;
    const {user} = req.metaData;

    const isValidPassword = bcrypt.compareSync(password, user.password);


    if(!isValidPassword){
        return res.status(401).send({message:"Invalid Password"});
    }

    //create a new access token 

    const token = jwt.sign({userId:user.userId},SECRET, {
        expiresIn:60*60
    })


    res.status(200)
    .send({
        name:user.name,
        userId:user.userId,
        email:user.email,
        userType:user.userType,
        userStatus:user.userStatus,
        accessToken:token
    });
}