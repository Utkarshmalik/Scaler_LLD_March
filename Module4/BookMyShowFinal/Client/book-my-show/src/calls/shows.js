import { axiosInstance } from "."



export const getAllTheatesByMovie = async (movieId, date)=>{

    try{

        const response = await axiosInstance
        .get(`http://localhost:3000/shows?movieId=${movieId}&date=${date}`);
        console.log(response);
        return response.data;

    }catch(err){
        return err.response;
    }
}



export const getShowViaId = async (showId)=>{
    
    try{
        const response = await axiosInstance
        .get(`http://localhost:3000/shows/${showId}`);
        console.log(response);
        return response.data;

    }catch(err){
        return err.response;
    }
}