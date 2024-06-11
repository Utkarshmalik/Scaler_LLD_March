import Dashboard from "./Components/Dashboard/Dashboard"
import DocumentCounter from "./Components/DocumentCounter/DocumentCOunter";
import Login from "./Components/Login/Login";
import {useState} from "react";


function App(){

  const [isLoggedIn , setIsLoggedin] = useState(true);


  function onLogin(){
    setIsLoggedin(true);
  }

  function onLogout(){
    setIsLoggedin(false);
  }

  // return <DocumentCounter/>

  return <div style={{minHeight:"100vh"}}>

    {
      //conditional rendering 
      
      (isLoggedIn)? <Dashboard onLogout={onLogout} /> : <Login onLogin={onLogin} />
    }

  </div>
}



export default App;





















    // {

    //   (()=>{

    //     if(isLoggedIn){
    //       return <Dashboard/>
    //     }
    //     else{
    //       return <Login/>
    //     }
    //   })()


    // }