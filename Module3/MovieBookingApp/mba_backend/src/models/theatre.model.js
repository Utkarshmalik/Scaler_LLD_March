const mongoose = require("mongoose");

const theatreSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    pinCode:{
        type:Number,
        required:true,
        max:99999
    },
    noOfScreens:{
        type:Number,
        default:1
    },
    movies:{
        type:[mongoose.SchemaTypes.ObjectId],
        ref:'mba_movie'
    }
})

module.exports= mongoose.model("theatre_mba",theatreSchema);