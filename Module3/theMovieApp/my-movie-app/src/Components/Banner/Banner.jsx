import axios from "axios";
import { useEffect, useState } from "react";


function Banner(){

    const [bannerImage, setBannerImage] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/991px-Placeholder_view_vector.svg.png");
    const [title, setTitle]  = useState("PlaceHolder Movie");

    useEffect(()=>{
        axios.get(" https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=1")
        .then(function(res){
            let firstMovie = res.data.results[2];
            let firstMovieTitle = firstMovie.title;
            let firstMoviePoster = firstMovie.backdrop_path;

            setBannerImage(`https://image.tmdb.org/t/p/original/${firstMoviePoster}`);
            setTitle(firstMovieTitle);
        })
    },[]);

    return <div

    className="h-[20vh] bg-cover bg-center md:h-[75vh] flex items-end"

    style={{backgroundImage:`url(${bannerImage})`}}
    >
        <div className=" text-white text-center w-full text-2xl"> 
        {title}
        </div>
    </div>

}

export default Banner;