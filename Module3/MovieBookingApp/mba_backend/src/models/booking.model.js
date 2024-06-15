const mongoose = require("mongoose");
const { bookingStatus } = require("../utils/constant");


const bookingSchema  = new mongoose.Schema({

    movie:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true,
        ref:"mba_movie"
    },
    theatre:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true,
        ref:"theatre_mba"
    },
    user:{
         type:mongoose.SchemaTypes.ObjectId,
        required:true,
        ref:"user_mba"
    },
    showDate:{
        type:Date,
        required:true
    },
    showTimings:{
        type:String
    },
    status:{
        type:String,
        enum:Object.values(bookingStatus),
        default:bookingStatus.inProgress
    },
    seats:{
        type:[Number],
        required:true
    },
    totalCost:{
        type:Number
    },
    createdAt:{
        type:Date,
        immutable:true,
        default:()=>{
            return Date.now()
        }
    }, 
    updatedAt:{
        type:Date,
        immutable:true,
        default:()=>{
            return Date.now()
        }
    },
})


module.exports = mongoose.model("booking_mba",bookingSchema);