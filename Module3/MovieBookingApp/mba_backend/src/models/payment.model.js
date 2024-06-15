
const mongoose = require("mongoose");
const { paymentStatus } = require("../utils/constant");

const paymentSchema = new mongoose.Schema({
    bookingId:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true,
        ref:'booking_mba',
    },
    status:{
        type:String,
        enum:Object.values(paymentStatus),
        default:paymentStatus.pending
    },
    amount:{
        type:Number,
        required:true
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
        default:()=>{
            return Date.now()
        }
    }
})


module.exports = mongoose.model("payment_mba",paymentSchema);