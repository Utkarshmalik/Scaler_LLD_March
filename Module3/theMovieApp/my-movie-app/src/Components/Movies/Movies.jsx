import TypewriterSpinner from "../common/Spinner/Spinner";
import MovieCard from "../MovieCard/MovieCard";
import Pagination from "../Pagination/Pagination";
import { useMovieData } from "../../hooks/useMovieDataHook";


function Movies(){

    const {movies, watchList, addToWatchList, removeFromWatchList,
    nextPageFn, previousPageFn, pageNumber, loading}  = useMovieData();


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
                        return <MovieCard watchList={watchList} 
                      addToWatchList = {addToWatchList}
                      removeFromWatchList ={removeFromWatchList}
                        movieObj={movieObj}  />
                    })
                }
            </div>
            <Pagination nextPageFn={nextPageFn} previousPageFn={previousPageFn} pageNumber={pageNumber}/>
        </div>
    )
}




export default Movies;


// Custom hooks in React are JavaScript functions that allow you to extract and reuse stateful logic from components. They follow a specific naming convention: their names should start with use (e.g., useCustomHook). Custom hooks are useful for abstracting complex logic into reusable functions, improving code organization and reusability.