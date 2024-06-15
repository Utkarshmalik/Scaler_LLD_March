const bookingModel = require("../models/booking.model");
const { bookingStatus, paymentStatus } = require("../utils/constant");

const validateCreateNewPayment = async (req,res,next)=>{

    const {bookingId} = req.params;
    const {status, amount} = req.body;

    try{
    const booking = await bookingModel.findById(bookingId);

    if(!booking){
        return res.status(400).send({message:"Invalid Booking Id"});
    }

    if(JSON.stringify(booking.user)!== JSON.stringify(req.user._id)){

        return res.status(403).send({message:"You have insufficient permissions to make a payment"});

    }

    if(booking.status !== bookingStatus.inProgress){
        return res.status(403).send({message:"Booking must be in progress to make a payment"});
    }

    if(!Object.values(paymentStatus).includes(status)){
        return res.status(400).send({message:"Invalid status is passed"});
    }

    next();

    }
    catch(e){
        return res.status(500).send({message:"Internal Server Error "+e.message});
    }
}


module.exports={
    validateCreateNewPayment
}