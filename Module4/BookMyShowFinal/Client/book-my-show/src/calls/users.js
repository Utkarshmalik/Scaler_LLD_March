import { axiosInstance } from ".";
const backendEndPoint = process.env.REACT_APP_BACKEND_URL;

export const RegisterUser  = async (userObj)=>{


    try{
    const response = await axiosInstance.post(`${backendEndPoint}/ecomm/api/v1/auth/signup`,{
    name:userObj.name,
    email:userObj.email,
    password:userObj.password,
    userId:userObj.userId,
    userType:"CUSTOMER"
    })

       return response;
    }
    catch(err){
        console.log(err);
        return err.response;
    }
}


export const LoginUser  = async (value) =>{

    try{
    const response  = await axiosInstance.post(`${backendEndPoint}/login`,{
            email:value.email,
            password:value.password
        })

        return response;

    }catch(err){
        return err.response;
    }
}


export const ForgetPassword  = async (value) =>{

    try{
    const response  = await axiosInstance.patch(`${backendEndPoint}/forgetPassword`,{
            email:value.email
        })

        return response;

    }catch(err){
        return err.response;
    }

}


export const ResetPassword  = async (value) =>{

    try{
    const response  = await axiosInstance.patch(`${backendEndPoint}/resetPassword`,{
            otp:value.otp,
            password:value.password
        })

        return response;

    }catch(err){
        return err.response;
    }

}