const mongoose = require("mongoose");
const { userTypes, userStatus } = require("../utils/constants");




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
        default:()=>Date.now(),
        get: (date)=> {
            const dd=  String(date.getDate()).padStart(2,'0');
            const mm =  String(date.getMonth()+1).padStart(2,'0');
            const yyyy = date.getFullYear();

           return `${dd}-${mm}-${yyyy}`;
     }

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