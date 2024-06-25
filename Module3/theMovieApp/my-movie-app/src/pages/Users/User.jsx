import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import userSlice from "../../redux/slice/userSlice";
const actions = userSlice.actions;

function User(){


    const userState = useSelector((state)=> state.userState);
    const dispatch= useDispatch();

    const {status, user, error} = userState;

    useEffect(()=>{
        console.log("dispatching action");
        dispatch(actions.fetchUserRequest(1));

    },[])


    return <div>
        
        <h5> status : {status} </h5>



    </div>

    


}
export default User;