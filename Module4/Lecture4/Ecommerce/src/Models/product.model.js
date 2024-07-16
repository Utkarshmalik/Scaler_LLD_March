const mongoose = require("mongoose");

//create a schema 

 const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        set:function(v){
            return Math.round(v*100) / 100;
        }
    },
    category:{
        type:String,
        required:true,
        enum:["Electronics","Fashion","Jewellery"]
    }
 });   



// create a model from schema 
  const ProductModel  = mongoose.model("Products",ProductSchema);



//export the model 

module.exports = ProductModel;