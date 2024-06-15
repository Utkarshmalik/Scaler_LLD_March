const theatreModel = require("../models/theatre.model");

exports.createTheatre = async (req,res)=>{
    try{
    const theatre = await theatreModel.create(req.body);
    return res.status(201).send(theatre);
    }
    catch(e){
        return res.status(500).send({message:"Internal Server Error "+e.message});
    }
}
exports.getTheatres = async (req,res)=>{
    try{

        const cond={};

        if(req.query.name!=undefined){
            cond.name=req.query.name;
        }

    if(req.query.pinCode!=undefined){
            cond.name=req.query.pinCode;
        }


        const theatres = await theatreModel.find(cond).populate("movies");

        if(!theatres){
            return res.status(404).send({message:"theatres not found"});
        }

        return res.send(theatres);

    }
    catch(e){
        return res.status(500).send({message:"Internal Server Error "+e.message});
    }
}

exports.getTheatre= async function(req,res){

    const id=req.params.id;

        try{
    const theatre= await theatreModel.findById(id).populate("movies");

    if(!theatre){
            return res.status(404).send({message:"Theatre not found"});
        }

        return res.send(theatre);
    }
     catch(e){
        return res.status(500).send({message:"Internal Server Error "+e.message});
    }
}

exports.updateMovieToTheare= async function(req,res){

        const {remove} =  req.query;


    const {movie, theatre} = req.metaData;

    if(remove){
        theatre.movies = theatre.movies.filter(movieId => JSON.stringify(movieId)!=JSON.stringify(movie._id));
    }else{
      theatre.movies.push(movie._id);
    }

        try{
            const updatedTheatre= await theatre.save();
            return res.send(updatedTheatre);
    }
     catch(e){
        return res.status(500).send({message:"Internal Server Error "+e.message});
    }
}


exports.getTheatre= async function(req,res){

    const id=req.params.id;

        try{
    const theatre= await theatreModel.findById(id).populate("movies");

    if(!theatre){
            return res.status(404).send({message:"Theatre not found"});
        }

        return res.send(theatre);
    }
     catch(e){
        return res.status(500).send({message:"Internal Server Error "+e.message});
    }
}

exports.checkIfMovieInTheatre = async function(req,res){
       const {movie, theatre} = req.metaData;
        return res.status(200).send({running: theatre.movies.includes(movie._id)});
}