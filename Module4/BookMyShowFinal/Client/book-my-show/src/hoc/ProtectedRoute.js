import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function ProtectedRoute({children}){

    const [user, setUser] = useState(null);

    useEffect(()=>{
    const isTokenAvailable = localStorage.getItem("token");

    //make an API call using token to backend to get the user Details 

    setUser({name:"utkarh"});


      if(!isTokenAvailable){
        navigate("/login");
      }
    },[])

    const navigate  = useNavigate();

    if(user){
        return <div>
            {children}
        </div>
    }

}

export default ProtectedRoute;