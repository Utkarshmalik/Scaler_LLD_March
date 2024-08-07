import { axiosInstance } from "."

const backendEndPoint = process.env.REACT_APP_BACKEND_URL;


export const getAllTheatesByMovie = async (movieId, date)=>{

    try{

        const response = await axiosInstance
        .get(`${backendEndPoint}/shows?movieId=${movieId}&date=${date}`);
        console.log(response);
        return response.data;

    }catch(err){
        return err.response;
    }
}



export const getShowViaId = async (showId)=>{
    
    try{
        const response = await axiosInstance
        .get(`${backendEndPoint}/shows/${showId}`);
        console.log(response);
        return response.data;

    }catch(err){
        return err.response;
    }
}