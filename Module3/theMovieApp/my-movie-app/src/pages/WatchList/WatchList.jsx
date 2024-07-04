import { useContext, useEffect, useState } from "react";
import TypewriterSpinner from "../../Components/common/Spinner/Spinner";
import genreids from "../../utilities/generes";
import { all } from "axios";
import { WatchListContext } from "../../context/WatchListContext";

var allMovies;


function WatchList(){


    //  const [movies, setMovies] = useState([]);

    const {watchList:movies, setWatchList:setMovies, removeFromWatchList}  = useContext(WatchListContext);
    const [loading, setIsLoading] = useState(true);
    const [search, setSearch] = useState("");

    const genreSet = new Set();

    const onSearchValueChange = (e)=>{

        setSearch(e.target.value);

        const updatedMovies = allMovies.filter((movie)=>{
            return movie.title.toLowerCase().includes(e.target.value.toLowerCase());
        })

        

        setMovies(updatedMovies);
    }

    movies.forEach((movie)=>{

        const genreIds= movie.genre_ids;

        const genreName = genreids[genreIds[0]]
    
        genreSet.add(genreName);
     
    })



    const genres = Array.from(genreSet);
    genres.unshift("All Genres");
    console.log(genres);

    // useEffect(()=>{
    //       var watchListData = JSON.parse(localStorage.getItem("watchList"));
    //         if(watchListData===null){
    //             watchListData=[];
    //         }
    //         setIsLoading(false);
    //         console.log(watchListData);
    //         setMovies(watchListData); 
    //         allMovies = watchListData;
    // },[])

    



    return <div>

        <div className="flex justify-center m-4">


        {
              genres.map((genre)=>{
                return <div className="flex justify-center items-center mx-4 bg-blue-400 h-[3rem] w-[9rem] text-white font-bold bolder rounded-xl">
                    {genre}
                 </div>   
            })
        }

      

        </div>

          <div className="my-10">
            <input type="text" value={search} onChange={onSearchValueChange} placeholder="Search Movies"
            
            className="h-[3rem] w-[18rem] bg-gray-200 px-4 outline-none border border-slate-600"
            />
        </div>

        <div>

            <table className="w-full">

                <thead>

                    <tr>
                        <th> Name </th>
                        <th> Ratings </th>
                        <th> Popularity </th>
                        <th> Genre </th>

                    </tr>
                </thead>

                <tbody>
                    {

                        movies.map((movie)=>{

                            return <tr>
                                <td className="flex items-center px-6 py-4 ">
                                    <img className="h-[6rem] w-[10rem] object-fit" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                                    <div className="px-2 font-medium"> {movie.title} </div>
                                </td>

                                <td>
                                    {movie.vote_average}
                                </td>

                                      <td>
                                     {movie.popularity}
                                </td>

                                      <td>
                                     {  genreids[movie.genre_ids[0]]}
                                </td>

                                <td onClick={()=>removeFromWatchList(movie)} className="text-red-500">
                                    Delete
                                </td>

                            </tr>
                        })
                    }

                </tbody>



            </table>


        </div>



    </div>

}

export default WatchList;