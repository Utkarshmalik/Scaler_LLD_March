import { useState } from "react";
import { userSignIn } from "../../api/auth";
import { useNavigate } from "react-router-dom";


function Login(){

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const onUserIdChange=(e)=>{
        setUserId(e.target.value);
    }

    const onPasswordChange = (e)=>{
        setPassword(e.target.value);
    }

    const onLogin= async (e)=>{
        e.preventDefault();
        console.log(userId);
        console.log(password);

     const signInResponse  = await userSignIn({
            userId:userId,
            password:password
        });

        const statusCode  = signInResponse.status;

        if(statusCode===200){

            //login is successful

            console.log("Login Successful");

            navigate("/");

        }else{

            //show some error message

            console.log("Invalid Credentials");
        }

    

    };



    return <div>

        <div>

            <h4> Login </h4>

        </div>


        <form onSubmit={onLogin}>

            <div>

                <input onChange={onUserIdChange}  value={userId} type="text" placeholder="userId" />

            </div>

            <div>

                <input onChange={onPasswordChange}   value={password} type="password" placeholder="password" />

            </div>

            <div>
                <input type="submit"  />

            </div>


        </form>


        </div>
}


export default Login;