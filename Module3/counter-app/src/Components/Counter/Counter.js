import {useState} from "react";


function Counter(){

    console.log("Inside a counter");

    const [count, setCount] = useState(0);

    function onButtonClick(){
        setCount(count+1);
    } 

    console.log("rendering some UI with count value ",count);

    return  <div>

        <p> You clicked {count} times </p>

        <button onClick={onButtonClick} > Click me </button>

    </div>

}

export default Counter;