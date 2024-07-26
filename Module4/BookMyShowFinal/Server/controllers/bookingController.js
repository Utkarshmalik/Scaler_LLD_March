const Bookings = require("../models/bookingModel");
const Shows = require("../models/showModel");



const makePayment  = (req,res)=>{

    res.send({
        success:true,
        message:"Payment Successful!",
        data:"ejqwbfilewbfileqbfqennfdqdq"
    })

}


const createABooking = async (req,res)=>{

    req.body.user = req.userDetails._id;

    try{
            const newBooking = new Bookings(req.body);
            await newBooking.save();

            const show = await Shows.findById(req.body.show);

            const updatedBookedSeats = [...show.bookedSeats, ...req.body.seats];

            await Shows.findByIdAndUpdate(req.body.show,{bookedSeats:updatedBookedSeats});

            return res.send({
                success:true,
                message:"New Booking Done!",
                data:newBooking
            })

    }catch(err){
        res.send({
            success: false,
            message: err.message
        });
    }




}

const getAllBookings  = async (req,res)=>{


    const userDetails = req.userDetails;

    var conditon;

    if(userDetails.isAdmin){
        conditon={};
    }else{
        conditon={user:userDetails._id}
    }


      try{
        const allBookings = await Bookings.find(conditon).populate('show').populate('user');

        return res.status(200).send({
            success:true,
            message:"All Bookings have been fetched successfully",
            data:allBookings
        })

    }catch(err){
        res.status(500).send({
            message:err.message,
            success:false
        })
    }


}


module.exports = {
    makePayment,
    createABooking,
    getAllBookings
}