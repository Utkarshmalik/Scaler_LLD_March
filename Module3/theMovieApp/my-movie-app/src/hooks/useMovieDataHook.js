import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { WatchListContext } from "../context/WatchListContext";


    export function useMovieData(){
        
    const [movies, setMovies] = useState([]);
    const [loading, setIsLoading] = useState(true);
    const [pageNumber, setPageNumber] = useState(1);

    // const [watchList, setWatchList] = useState([]);

    const watchListContextValue = useContext(WatchListContext);

    const {watchList , setWatchList, addToWatchList, removeFromWatchList}  = watchListContextValue;




       useEffect(()=>{
        console.log("fetch data for ",pageNumber);
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${pageNumber}`)
        .then(function(res){
            let movies = res.data.results;

           
            // var watchListData = JSON.parse(localStorage.getItem("watchList"));
            // if(watchListData===null){
            //     watchListData=[];
            // }

            // setWatchList(watchListData);

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
    
    

    return {movies, watchList, addToWatchList, removeFromWatchList,
    nextPageFn, previousPageFn, pageNumber, loading};


    }