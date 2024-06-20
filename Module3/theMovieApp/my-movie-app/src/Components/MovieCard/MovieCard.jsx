

function MovieCard({movieObj, watchList, addToWatchList, removeFromWatchList}){



    const isMovieAvailableInWatchList  =  watchList.some(movie => movie.id == movieObj.id);

    console.log(isMovieAvailableInWatchList);



    return <div

    className="h-[40vh] w-[200px] bg-cover bg-center rounded-xl flex flex-col justify-between items-end hover:scale-110 hover:cursor-pointer duration-300 "

    style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${movieObj.backdrop_path})`}}
    >

        {

            (!isMovieAvailableInWatchList)? <div onClick={()=>addToWatchList(movieObj)} className="m-4 flex justify-center items-center h-8 w-8 rounded bg-gray-900/60">
             &#128525; </div> :
             <div onClick={()=>removeFromWatchList(movieObj)} className="m-4 flex justify-center items-center h-8 w-8 rounded bg-gray-900/60">
                &#10060;
        </div>

        }
        <div className="text-xl p-2 rounded bg-gray-900/60 text-white w-full text-center">
            {movieObj.title}
        </div>

    </div>



}

export default MovieCard;