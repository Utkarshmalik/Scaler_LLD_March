const movieModel = require("../models/movie.model");
const theatreModel = require("../models/theatre.model");
const mongoose = require("mongoose");

const validateCreateTheatresBody = async (req,res,next)=>{

    const {name, description, pinCode, movies} = req.body;

    if(!req.body.name){
        return res.status(400).send({message:"Theatre name is not provided"})
    }

      if(!req.body.description){
        return res.status(400).send({message:"Theatre description is not provided"})
    }

    if(!req.body.pinCode){
        return res.status(400).send({message:"Theatre pinCode is not provided"})
    }

    if(movies && movies.length){
        //validate all are correct movies 

      const promiseArr =movies.map((movieId)=>{return movieModel.findById(movieId)})

      try{
           const values = await Promise.all(promiseArr);

           values.forEach((value)=>{
            if(!value){
                return res.status(400).send({message:"Invalid Movie Id is passed"});
            }
           })
           
           next();
           return;

      }catch(err){
        return res.status(400).send({message:"Invalid Movie Id is passed"});
      }
    }

    next();
}

const verifyAddMoviesToTheatreReqIds = async (req, res, next)=>{

    const {movieId, theatreId} =  req.params;

    
      if(!mongoose.isValidObjectId(movieId) || !mongoose.isValidObjectId(theatreId) ){
            return res.status(400).send({message:"Invalid Object Id Format"});
    }

    try{
    const [movie, theatre] = await Promise.all([movieModel.findById(movieId), theatreModel.findById(theatreId)]);


            if(!movie){
                return res.status(400).send({message:"Movie Not Found"});
            }

            if(!theatre){
                        return res.status(400).send({message:"Theatre Not Found"});
            }

            req.metaData={
                movie,theatre
            }

         next();

         return;
    }
    catch(err){
        return res.status(400).send({message:"Invalid Movie Id or Theatre Id"});
    }

}

module.exports={
    validateCreateTheatresBody,
    verifyAddMoviesToTheatreReqIds
}