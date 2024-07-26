const { makePayment, createABooking, getAllBookings } = require("../controllers/bookingController");
const { verifyToken, verifyAdmin } = require("../middlewares/authMiddleware");



module.exports = (app)=>{

    app.post("/payment",[verifyToken],makePayment);

    app.post("/bookings",[verifyToken],createABooking);

    app.get("/bookings",[verifyToken],getAllBookings);

}