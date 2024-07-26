const { default: mongoose } = require("mongoose");
const Shows = require("../models/showModel")
const {ObjectId}  = mongoose.Types;

const createNewShow = async (req,res)=>{

    try{
            const newShow = new Shows(req.body);
            await newShow.save();

            return res.send({
                success:true,
                message:"New show added successfully!"
            })

    }
    catch(err){
        return res.status(500).send({
                success:false,
                message:err.message
            })

    }

}

const getAllShows = async (req,res)=>{

    var queryCondition={};


    if(req.query.movieId){
         const movieId =  new ObjectId(req.query.movieId);
        queryCondition.movie = movieId;
    }


    if(req.query.theatreId){
         const theatreId =  new ObjectId(req.query.theatreId);
        queryCondition.theatre = theatreId;
    }

    console.log(queryCondition);


    try{
            const allShows = await Shows.find(queryCondition).populate('theatre').populate('movie');

            return res.send({
                success:true,
                message:"Shows fetched successfully!",
                data:allShows
            })

    }
    catch(err){
        return res.status(500).send({
                success:false,
                message:err.message
            })

    }

}

const getShowById = async (req,res)=>{

    try{
            const show = await Shows.findById(req.params.id).populate('theatre').populate('movie');

            return res.send({
                success:true,
                message:"Show fetched successfully!",
                data:show
            })

    }
    catch(err){
        return res.status(500).send({
                success:false,
                message:err.message
            })

    }

}




module.exports = {
    createNewShow,
    getAllShows,
    getShowById
}