import { axiosInstance } from ".";

export const RegisterUser  = async (userObj)=>{


    try{
    const response = await axiosInstance.post("http://localhost:3000/ecomm/api/v1/auth/signup",{
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
    const response  = await axiosInstance.post("http://localhost:3000/login",{
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
    const response  = await axiosInstance.patch("http://localhost:3000/forgetPassword",{
            email:value.email
        })

        return response;

    }catch(err){
        return err.response;
    }

}


export const ResetPassword  = async (value) =>{

    try{
    const response  = await axiosInstance.patch("http://localhost:3000/resetPassword",{
            otp:value.otp,
            password:value.password
        })

        return response;

    }catch(err){
        return err.response;
    }

}