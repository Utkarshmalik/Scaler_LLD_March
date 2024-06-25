import { createSlice } from "@reduxjs/toolkit";



const userSlice = createSlice({

    name:"user",
    initialState:{
        status:'idle',
        user:null,
        error:null
    },
    reducers:{

        fetchUserRequest:(state)=>{
            state.status="loading";
        },
        fetchUserSuccess:(state, action)=>{
            state.user= action.payload;
            state.status = "success";
        },
            fetchUserFailure:(state, action)=>{
            state.error= action.payload;
            state.state="failed";
        }


    }

})


export default userSlice;