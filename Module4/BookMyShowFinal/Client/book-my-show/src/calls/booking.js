import { axiosInstance } from "."



export const bookShow = async (payload) => {
    
      try{
        const response = await axiosInstance.post('http://localhost:3000/bookings', payload);
        console.log(response.data);
        return response.data;
    }catch(err){
        return err.response
    }

}