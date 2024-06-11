import { useEffect, useState } from "react";

function DocumentCounter(){

    console.log("Inside Docuemt Counter");

    const [count, setCount] = useState(0);

    // useEffect(effect,arr);

    useEffect(()=>{
        console.log("Inside Use Effect");
        document.title = `Clicked ${count} times`;
    },[count]);

    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("Timer Click ")
        },1000);

        return function(){
            console.log("I will be called just before the compoent is about to be destroyed");
            clearInterval(timer);
        }

    },[])

    console.log("Rendering Some UI");

    return <div>

      <p>You clicked {count} times</p>

    <button onClick={() => setCount(count + 1)}>
            Click me
        </button>

    </div>

}

export default DocumentCounter;