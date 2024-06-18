

function MovieCard({movieObj}){

    return <div

    className="h-[40vh] w-[200px] bg-cover bg-center rounded-xl flex items-end hover:scale-110 hover:cursor-pointer duration-300"

    style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${movieObj.backdrop_path})`}}
    >
        
        <div>
             &#128525;
        </div>



        
        <div className="text-xl p-2 text-white w-full text-center">
            {movieObj.title}
        </div>

    </div>



}

export default MovieCard;