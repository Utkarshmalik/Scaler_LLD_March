import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/counterSlice";
import TodoSlice from "../slice/todoSlice";
import userSlice from "../slice/userSlice";
import userMiddleware from "../middleware/userMiddleware";

export const store = configureStore({
    reducer:{
        counter:counterReducer,
        todoState: TodoSlice.reducer,
        userState: userSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userMiddleware)
})