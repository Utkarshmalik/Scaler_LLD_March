const { createBooking, getAllBookings, getBookingDetails, updateBookingStatus } = require("../controllers/booking.controller")
const { verifyToken, isAdmin, isAdminOrSelfBooking } = require("../middlewares/authJWT.middleware")
const { verifyCreateBookingRequest } = require("../middlewares/booking.middleware")


module.exports = function(app){

    app.post("/mba/api/v1/bookings",[verifyToken, verifyCreateBookingRequest],createBooking)
    app.get("/mba/api/v1/bookings",[verifyToken, isAdmin] , getAllBookings)
    app.get("/mba/api/v1/bookings/:id",[verifyToken, isAdminOrSelfBooking],getBookingDetails)
    app.put("/mba/api/v1/bookings/:id/status",[verifyToken, isAdminOrSelfBooking],updateBookingStatus)

}