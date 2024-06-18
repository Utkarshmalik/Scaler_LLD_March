import { useEffect, useState } from "react";
import TypewriterSpinner from "../common/Spinner/Spinner";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";


function Movies(){

    const [movies, setMovies] = useState([]);
    const [loading, setIsLoading] = useState(false);

    useEffect(()=>{
        axios.get(" https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=1")
        .then(function(res){
            let movies = res.data.results;
            setMovies(movies);
        })
    },[]);
    
    if(loading){
        return <TypewriterSpinner/>
    }

    return (

        <div>

            <div className="text-2xl font-bold text-center m-5"> 
                <h1> Trending Movies </h1>
            </div>

            <div className="flex flex-wrap gap-8 justify-evenly">

                {
                    movies.map((movieObj)=>{
                        return <MovieCard  movieObj={movieObj}  />
                    })
                }

            </div>

        </div>


    )




}

export default Movies;