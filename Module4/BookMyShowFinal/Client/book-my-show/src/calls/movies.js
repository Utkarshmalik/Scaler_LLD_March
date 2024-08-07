import { axiosInstance } from "."

const backendEndPoint = process.env.REACT_APP_BACKEND_URL;

export const getAllMovies = async ()=>{

    try{

        while(1){
       const response = await axiosInstance.get(`${backendEndPoint}/movies`);
        return response.data;
        }
        
    }catch(err){
        console.log(err);

    }
}

export const getMovieById = async (id)=>{
    try{
       const response = await axiosInstance.get(`${backendEndPoint}/movies/${id}`);
        return response.data;

    }catch(err){
        console.log(err);

    }
}