import {useRef} from "react";


function FocusInput(){

    const inputRef = useRef(null);

    const focusInput =()=>{
        inputRef.current.focus();
    }

    return (
        <div>

            <input  ref={inputRef} type="text" />

            <button onClick={focusInput}> Focus input </button>
        </div>

    )
}

export default FocusInput;



// Use Cases for useRef

// Accessing DOM Elements: When you need to interact directly with a DOM element, such as focusing an input, measuring dimensions, or manipulating the element in other ways.

// Storing Mutable Values: When you need to store a mutable value that persists across renders but doesn't need to cause a re-render when updated. Examples include timers, intervals, previous state values, or any other non-UI related data.

// Avoiding Re-Initialization: When you want to initialize a value only once and keep it around across renders, like initializing a library or maintaining a stable reference to a callback function.