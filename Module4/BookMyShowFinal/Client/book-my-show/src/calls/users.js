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

    const response  = await axiosInstance.post("http://localhost:3000/ecomm/api/v1/auth/signin",{
            userId:value.userId,
            password:value.password
        })

        return response;

    }catch(err){
        return err.response;
    }

}