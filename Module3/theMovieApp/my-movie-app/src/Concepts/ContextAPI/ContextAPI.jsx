import React, { useContext } from "react";

const ContextWrapper = React.createContext();


function Context(){

    return <>
    <ContextWrapper.Provider value={{message:"Be Safe"}} >
    <GrandParent/>
    </ContextWrapper.Provider>
    </>
}

function GrandParent(){
    return <>
    <h2>GrandParent</h2>
        <div>⬇</div>
        <Parent>
            <h4> I am inside a parent </h4>
         </Parent>   
        </> 
}

function Parent({children}){
    return <>
    {children}
    <h2>Parent</h2>
        <div>⬇</div>
        <Children>
            <h1> I am within children </h1>
          </Children>  
        </> 
}


function Children({children}){

    const contextValue = useContext(ContextWrapper);
    const message = contextValue.message;

    console.log(contextValue);

     return <>
     {children}
       <h2>Children</h2>
        <div>⬇</div>
         <div> {message} </div>
        </>
}


export default Context;





// Step 1: create an context wrapper object using the method createContext().
// Step 2: Now use <ContextWrapper.Provider> tag to wrap all the components inside it.
// Step 3: To save values, use a value prop and assign some value to it.


// to derive value we use a method given by React useContext(ContextWrapper) to extract value

