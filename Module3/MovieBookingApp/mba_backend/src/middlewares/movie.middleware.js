const movieModel = require("../models/movie.model");
const { releaseStatusTypes, languageTypes } = require("../utils/constant");



const verifyCreateMovieBody=(req,res,next)=>{


    

    const {name,description,releaseDate, releaseStatus} = req.body;

    if(!name){
        return res.status(400).send({message:"Failed! Movie Name is not provided"})
    }

      if(!description){
        return res.status(400).send({message:"Failed! Movie description is not provided"})
    }

      if(!releaseDate){
        return res.status(400).send({message:"Failed! Movie Release Date is not provided"})
    }

    if(! Object.values(releaseStatusTypes).includes(releaseStatus)){
                return res.status(400).send({message:"Failed! Movie Release Status is not correct"})

    }


    next();

}

const verifyUpdateMovieBody=async function (req,res,next){

                try{
                    const movie= await movieModel.findById(req.params.id);

                    if(!movie){
                            return res.status(404).send({message:"Movie not found"});
                        }
                    
                    const { releaseStatus, language, name, description } = req.body;

                    if(releaseStatus && ! Object.values(releaseStatusTypes).includes(releaseStatus)){
                            return res.status(400).send({message:"Failed! Movie Release Status is not correct"})
                }

                    if(language && ! Object.values(languageTypes).includes(language)){
                            return res.status(400).send({message:"Failed! Language is not correct"})
                }

                if(!req.metaData){
                    req.metaData={};
                }

                req.metaData.movie=movie;

                next();

                }
                catch(e){
                    return res.status(500).send({message:"Internal Server Error "+e.message});
                }
}

module.exports={
    verifyCreateMovieBody,
    verifyUpdateMovieBody
}