
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/slice/counterSlice";

function Counter(){

    const count =  useSelector( (state)=>state.counter.value);
    const dispatch = useDispatch();
   
    

    const onIncrement=()=>{
        dispatch(increment());
    }

    const onDecrement=()=>{
        dispatch(decrement())
    }

    return <div>

        <h1> Counter  : {count}</h1>

        <button className="m-5" onClick={onIncrement}> Increment </button>
        <button onClick={onDecrement}> Decrement </button>

    </div>

}

export default Counter;