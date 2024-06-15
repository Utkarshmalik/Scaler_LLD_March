const { createTheatre, getTheatres, getTheatre, updateMovieToTheare: updateMovieToTheare, checkIfMovieInTheatre } = require("../controllers/theatre.controller");
const { verifyToken, isAdmin } = require("../middlewares/authJWT.middleware");
const { verifyIdParam } = require("../middlewares/generic.middlware");
const { validateCreateTheatresBody, verifyAddMoviesToTheatreReqIds } = require("../middlewares/theatre.middlewares");

module.exports =  function(app){
    app.post("/mba/api/v1/theatres",[verifyToken, isAdmin, validateCreateTheatresBody],createTheatre);
    app.get("/mba/api/v1/theatres",[verifyToken], getTheatres);
    app.get("/mba/api/v1/theatres/:id",[verifyToken, verifyIdParam], getTheatre);
    app.put("/mba/api/v1/theatres/:theatreId/movies/:movieId",[verifyToken, isAdmin, verifyAddMoviesToTheatreReqIds], updateMovieToTheare);
    app.get("/mba/api/v1/theatres/:theatreId/movies/:movieId",[verifyToken,verifyAddMoviesToTheatreReqIds], checkIfMovieInTheatre);

}