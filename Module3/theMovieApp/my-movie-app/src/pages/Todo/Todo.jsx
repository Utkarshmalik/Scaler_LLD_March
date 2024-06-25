import { useDispatch, useSelector } from "react-redux";
import TodoSlice from "../../redux/slice/todoSlice";
import { act } from "react";
const actions  = TodoSlice.actions;

function Todo(){

    const dispatch =  useDispatch();


    const todoState = useSelector((state)=> state.todoState);
    const {value, todoList} = todoState;

    const handleChange=(e)=>{
        const inputValue = e.target.value;
        dispatch(actions.updateInputField(inputValue));
    }

    const onAddNewTask=()=>{
        dispatch(actions.addTask(value));
    }


    return <div>

        <h2> Todo </h2>

        <div>

            <div>
                <input className="m-5" onChange={handleChange} 
                style={{border:"3px solid black"}} 
                type="text" 
                value={value}/>

                <button onClick={onAddNewTask} > Add</button>
            </div>

            <div>

                <ul>

                    {
                        todoList.map((task, indx)=>{
                            return <li> {task} </li>
                        })
                    }

                </ul>

            </div>
        </div>


    </div>

}

export default Todo;