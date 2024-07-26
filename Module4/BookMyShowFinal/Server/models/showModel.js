
const mongoose = require("mongoose");

const showSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    theatre:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'theatreLLDMarch',
        required:true
    },
    movie:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'moviesLLDMarch',
        required:true
    },

    totalSeats:{
        type:Number,
        required:true
    },
    bookedSeats:{
        type:Array,
        default:[]
    },
    ticketPrice:{
        type:Number,
        required:true
    }
},{timestamps:true});


const Shows = mongoose.model("showsScalerLLDMarch", showSchema);

module.exports = Shows;