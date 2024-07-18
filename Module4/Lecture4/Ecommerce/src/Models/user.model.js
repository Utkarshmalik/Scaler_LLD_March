const mongoose = require("mongoose");
const { userTypes, userStatus } = require("../utils/constants");


//userId:"utmaik"


const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        immutable:true,
        default:()=>Date.now()
    },
    userType:{
        type:String,
        required:true,
        enum: Object.values(userTypes),
        default:userTypes.customer
    },
    userStatus:{
        type:String,
        required:true,
        enum:Object.values(userStatus),
        default:userStatus.pending
    }
})

const UserModel = mongoose.model("UsersCollection",userSchema);


module.exports = UserModel;