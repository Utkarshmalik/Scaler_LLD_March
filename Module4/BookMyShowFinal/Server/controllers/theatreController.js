const Theatre = require("../models/theatreModel");
const User = require("../models/userModel");


const createTheatre = async (req,res)=>{

     try{

        const userFromDB = await User.findById(req.body.owner);

        console.log(userFromDB);

        if(!userFromDB){
            return res.status(400).send({success:"false",
        message:"This user seems not to be present in our systems"});
        }

        const newTheatre = new Theatre(req.body);
        await newTheatre.save();

        return res.status(201).send({
            success:true,
            message:"Mew Theatre has been added successfully!"
        })
    }catch(err){
        res.status(500).send({
            message:err.message,
            success:false
        })
    }

}

const getAllTheatres = async (req,res)=>{

    //who is the peron who is making this call 

    const userDetails = req.userDetails;

    var conditon;

    if(userDetails.isAdmin){
        conditon={};
    }else{
        conditon={owner:userDetails._id}
    }


      try{
        const allTheatres = await Theatre.find(conditon).populate("owner");

        return res.status(200).send({
            success:true,
            message:"All theatres have been fetched successfully",
            data:allTheatres
        })

    }catch(err){
        res.status(500).send({
            message:err.message,
            success:false
        })
    }


}

module.exports = {
    createTheatre, getAllTheatres
}