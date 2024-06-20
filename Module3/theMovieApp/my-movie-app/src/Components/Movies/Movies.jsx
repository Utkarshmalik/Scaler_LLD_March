import { useEffect, useState } from "react";
import TypewriterSpinner from "../common/Spinner/Spinner";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";
import Pagination from "../Pagination/Pagination";


function Movies(){

    const [movies, setMovies] = useState([]);
    const [loading, setIsLoading] = useState(true);
    const [pageNumber, setPageNumber] = useState(1);
    const [watchList, setWatchList] = useState([]);


      const addToWatchList = (movieObj)=>{
        const updatedWatchList = [...watchList, movieObj];
        setWatchList(updatedWatchList);
        localStorage.setItem("watchList", JSON.stringify(updatedWatchList));
      }

      const removeFromWatchList = (movieObj)=>{

        const updatedWatchList = watchList.filter((movie)=>{
            return movie.id != movieObj.id;
        })
        setWatchList(updatedWatchList);
        localStorage.setItem("watchList", JSON.stringify(updatedWatchList));
      }


       useEffect(()=>{
        console.log("fetch data for ",pageNumber);
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${pageNumber}`)
        .then(function(res){
            let movies = res.data.results;

           
            var watchListData = JSON.parse(localStorage.getItem("watchList"));
            if(watchListData===null){
                watchListData=[];
            }

            setWatchList(watchListData);

            setMovies(movies);
            setIsLoading(false);
        })
    },[pageNumber]);


    const previousPageFn=()=>{
        if(pageNumber===1){
            return;
        }

        setIsLoading(true);
        setPageNumber(pageNumber-1);
    }

    const nextPageFn=()=>{
        setIsLoading(true);
        setPageNumber(pageNumber+1);
    }
    
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