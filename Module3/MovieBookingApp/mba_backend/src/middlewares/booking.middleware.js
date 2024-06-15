const movieModel = require("../models/movie.model");
const theatreModel = require("../models/theatre.model");

const verifyCreateBookingRequest=async (req,res,next)=>{

    const {theatreId, movieId } = req.body;

    try{
    const [theatre, movie] =  await Promise.all([theatreModel.findById(theatreId), movieModel.findById(movieId)]);

    if(theatre && movie){

        if(!theatre.movies.includes(movie._id)){
            return res.status(400).send({message:"Movie not available in given theatre"});
        } 
        next();
        return;
    }

    if(!theatre){
        return res.status(400).send({message:"Invalid Theatre Id"});
    }

    if(!movie){
        return res.status(400).send({message:"Invalid Movie Id"});
    }}    
    catch(err){
        return res.status(500).send({message:"Something went wrong"});
    }
}

module.exports={
    verifyCreateBookingRequest
}