

const URL = "http://localhost:3000/mba/api/v1/auth/signin";


export const userSignIn= async (data)=>{


    console.log("make an API call with data ",data);

    const loginResponse  = await fetch(URL,{
        method:"POST",
         headers: {
      "Content-Type": "application/json",
       },
       body:JSON.stringify(data)
    })

    return loginResponse;

}