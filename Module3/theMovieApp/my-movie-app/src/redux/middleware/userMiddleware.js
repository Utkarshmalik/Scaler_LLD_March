import axios from "axios";
import userSlice from "../slice/userSlice";


// Calling next:
// The next function It passes the action to the next middleware in the chain. If there are no more middleware, it passes the action to the reducer.

const actions = userSlice.actions;

const userMiddleware = (store) => (next) => async (action) =>{

    if(action.type===actions.fetchUserRequest.type){
        next(action);
        try{
            const user = await fetchUser(action.payload);
            
            store.dispatch(actions.fetchUserSuccess(user));
        }
        catch(err){
          store.dispatch(actions.fetchUserFailure(err.message));
        }
    }else{
        return next(action);
    }


}

export default userMiddleware;


const fetchUser = async (userId) =>{
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return response.data;
}