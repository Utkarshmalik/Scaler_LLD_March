import { createSlice } from "@reduxjs/toolkit";


const TodoSlice = createSlice({

    name:'todoList', 
    initialState : {
        value:"",
        todoList:[]
    },
    reducers:{

        updateInputField:(state,descObj)=>{
            state.value = descObj.payload;
        }, 

        addTask :(state, descObj)=>{
            state.todoList = [...state.todoList,descObj.payload];
            state.value="";
        }

    } 
})


export default TodoSlice;

