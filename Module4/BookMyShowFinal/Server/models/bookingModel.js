const mongoose  = require("mongoose");


const bookingSchema  = new mongoose.Schema({

    show : {
        type:mongoose.Schema.Types.ObjectId,
        ref:'showsScalerLLDMarch'
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'userLLDMarch'
    },
    seats:{
        type:Array,
        required:true
    },
    transactionId:{
        type:String,
        required:true
    }
    
}, {timestamps:true})

const Bookings = mongoose.model("bookingsLLDMarch",bookingSchema);

module.exports = Bookings;