import { axiosInstance } from "."


export const getAllMovies = async ()=>{
    try{
       const response = await axiosInstance.get("http://localhost:3000/movies");
        return response.data;

    }catch(err){
        console.log(err);

    }
}

export const getMovieById = async (id)=>{
    try{
       const response = await axiosInstance.get(`http://localhost:3000/movies/${id}`);
        return response.data;

    }catch(err){
        console.log(err);

    }
}