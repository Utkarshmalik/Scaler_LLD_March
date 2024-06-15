const bookingModel = require("../models/booking.model");


exports.createBooking = async (req,res)=>{

    const userId = req.user._id;
    const {theatreId, movieId, showDate, showTimings, seats } = req.body;

    const bookingObj={
        movie:movieId,
        theatre:theatreId,
        user:userId,
        showDate,
        showTimings,
        seats,
        totalCost : 1000 * seats.length
    }

    try{
        const booking = await bookingModel.create(bookingObj);
        res.status(201).send(booking); 
    }
    catch(err){
        return res.status(500).send({message:"Internal Server Error "+err});
    }

}


exports.getAllBookings = async (req,res)=>{


    try{
        const bookings = await bookingModel.find({}).populate("movie").populate("user").populate("theatre");
        res.status(200).send(bookings); 
    }
    catch(err){
        return res.status(500).send({message:"Internal Server Error "+err});
    }

}


exports.getBookingDetails = async (req,res)=>{


    try{
        const bookings = await bookingModel.findById(req.params.id).populate("movie").populate("user").populate("theatre");
        res.status(200).send(bookings); 
    }
    catch(err){
        return res.status(500).send({message:"Internal Server Error "+err});
    }

}

exports.updateBookingStatus =async (req,res)=>{

    const {status} = req.body;


    try{
        const result = await bookingModel.findByIdAndUpdate(req.params.id,{status});
        res.status(200).send(result); 
    }
    catch(err){
        return res.status(500).send({message:"Internal Server Error "+err});
    }

}



