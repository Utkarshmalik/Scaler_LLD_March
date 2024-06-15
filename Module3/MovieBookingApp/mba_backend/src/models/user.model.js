const { default: mongoose } = require("mongoose");
const { userTypes, userStatus } = require("../utils/constant");

const userSchema = new mongoose.Schema({

    name:{
    type:String,
    required:true
    },
    userId:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true
    },
    userType:{
        type:String,
        required:true,
        default:userTypes.customer,
        enum:Object.values(userTypes)
    },
    userStatus:{
        type:String,
        required:true,
        default:userStatus.pending,
        enum:Object.values(userStatus)
    }
})

module.exports = mongoose.model("user_mba",userSchema);