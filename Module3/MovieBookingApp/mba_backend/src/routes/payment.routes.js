const { createPayment } = require("../controllers/paymenty.controller");
const { verifyToken } = require("../middlewares/authJWT.middleware");
const { validateCreateNewPayment } = require("../middlewares/payment.middlewares");


module.exports = function(app){

    app.post("/mba/api/v1/bookings/:bookingId/payments",[verifyToken, validateCreateNewPayment],createPayment);
}