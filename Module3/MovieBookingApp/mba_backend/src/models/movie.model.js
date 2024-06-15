const mongoose = require("mongoose");
const { languageTypes, releaseStatus, releaseStatusTypes } = require("../utils/constant");


const movieScema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
            type:String,
            required:true,
            minLength:10
    },
    posterUrl:{
        type:String,
        required:true
    },
    trailerUrl:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true,
        enum: Object.values(languageTypes)
    },
    director:{
        type:String,
        required:true
    },
    cast:{
        type:[String],
        required:true
    },
    releaseStatus:{
        type:String,
        required:true,
        enum:Object.values(releaseStatusTypes)
    },
    price:{
        type:Number,
        minValue:1
    },
    releaseDate:{
        type:Date,
        required:true
    }
})

module.exports = mongoose.model("mba_movie",movieScema);