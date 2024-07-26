const Movies = require("../models/movieModel")


const addMovie  = async (req,res)=>{
    try{
        const newMovie = new Movies(req.body);
        await newMovie.save();

        return res.status(201).send({
            success:true,
            message:"Mew Movie has been added successfully!"
        })
    }catch(err){
        res.status(500).send({
            message:err.message,
            success:false
        })
    }

}


const getAllMovies  = async (req,res)=>{
     try{

        const allMovies = await Movies.find({});

        return res.status(200).send({
            success:true,
            message:"All movies have been fetched successfully",
            data:allMovies
        })

    }catch(err){
        res.status(500).send({
            message:err.message,
            success:false
        })
    }

}



const getAMovieById  = async (req,res)=>{
     try{

        const movie = await Movies.findById(req.params.id);

        res.send({
            success:true,
            message:"Movie Fetched Successfully",
            data:movie

        })

    }catch(err){
        res.status(500).send({
            message:err.message,
            success:false
        })
    }

}



const updateAMovieById  = async (req,res)=>{

     try{
          const movie = await Movies.findByIdAndUpdate(req.params.id,req.body);

    res.send({
            success:true,
            message:"Movie Updated Successfully",
            data:movie

        })


    }catch(err){
        res.status(500).send({
            message:err.message,
            success:false
        })
    }
}



const deleteAMovieById  = async (req,res)=>{
        try{
          const movie = await Movies.findByIdAndDelete(req.params.id);

    res.send({
            success:true,
            message:"Movie Deleted Successfully"
        })


    }catch(err){
        res.status(500).send({
            message:err.message,
            success:false
        })
    }


}


module.exports ={

    addMovie,getAllMovies,getAMovieById,updateAMovieById,deleteAMovieById
}