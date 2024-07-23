const { addMovie, getAllMovies, getAMovieById, updateAMovieById, deleteAMovieById } = require("../controllers/movieController");



module.exports = (app)=>{

    app.post("/movies", addMovie);

    app.get("/movies",getAllMovies);

    app.get("/movies/:id",getAMovieById);

    app.put("/movies/:id",updateAMovieById);

    app.delete("/movies/:id",deleteAMovieById);
    

}

//crete a new movie 

//get all the movies 

//get a movie by movieId 

//update a movie

//delete a movie 
