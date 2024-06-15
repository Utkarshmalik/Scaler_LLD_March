const { createMovie, getMovies, getMovie, updateMovie, deleteMovie } = require("../controllers/movie.controller");
const { verifyToken, isAdmin } = require("../middlewares/authJWT.middleware");
const { verifyIdParam } = require("../middlewares/generic.middlware");
const { verifyCreateMovieBody, verifyUpdateMovieBody } = require("../middlewares/movie.middleware");





module.exports =  function(app){

    app.post("/mba/api/v1/movies",[verifyToken,isAdmin, verifyCreateMovieBody],createMovie);
    app.get("/mba/api/v1/movies",[], getMovies);
    app.get("/mba/api/v1/movies/:id",[verifyToken,verifyIdParam], getMovie);
    app.put("/mba/api/v1/movies/:id",[verifyToken, isAdmin, verifyIdParam, verifyUpdateMovieBody], updateMovie);
    app.delete("/mba/api/v1/movies/:id",[verifyToken, isAdmin, verifyIdParam], deleteMovie);
}