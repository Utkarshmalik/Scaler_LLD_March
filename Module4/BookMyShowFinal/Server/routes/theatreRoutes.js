const { createTheatre, getAllTheatres } = require("../controllers/theatreController");
const { verifyToken } = require("../middlewares/authMiddleware");




module.exports = (app)=>{

    app.post("/theatres", createTheatre);

    app.get("/theatres",[verifyToken] ,getAllTheatres);

}