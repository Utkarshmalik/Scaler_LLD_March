import Navbar from "../Navbar/Navbar";
import User from "../User/User";
import "./Dashboard.css";
import usersData from "./userData";

  function renderUsers(){
    
    return  <div className="users"> 
        {
            usersData.map((userObj)=>{
                return <User userObj={userObj} />
            })
        }
        </div>
    
    }

function Dashboard(props){
    return <div style={{background:"black",color:"white",height:"100%"}} > 

    <Navbar onLogout={props.onLogout} />
    
        <h1> User Dashboard  </h1>
        {renderUsers()}
       
    </div>
}


export default Dashboard;



// State is a built-in object in React components that allows you to store property values that belong to the component.

// It is used to hold data or information about the component that may change over time. 

// When the state changes, the component re-renders to reflect the new state.









        //  <User name="Utkarsh" email="utmalik@amazon.com" number="13342141414" imageUrl="https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png"   />

        // <User name="Atul" email="atul@amazon.com" number="13413441414" imageUrl="https://ew.com/thmb/SwKIClok9Xl8xo0JZ9MikIqcFZg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/avatar-netflix-012524-ab3f0b6c6176430c963eb64390b9e5c0.jpg"   />

        //     <User name="Jitendra" email="utmalik@amazon.com" number="134141414" imageUrl="https://m.media-amazon.com/images/S/pv-target-images/16627900db04b76fae3b64266ca161511422059cd24062fb5d900971003a0b70.jpg"   />


        // <User name="Archana" email="utmalik@amazon.com" number="134141414" imageUrl="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"   />


        //          <User name="Utkarsh" email="utmalik@amazon.com" number="13342141414" imageUrl="https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png"   />

        // <User name="Atul" email="atul@amazon.com" number="13413441414" imageUrl="https://ew.com/thmb/SwKIClok9Xl8xo0JZ9MikIqcFZg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/avatar-netflix-012524-ab3f0b6c6176430c963eb64390b9e5c0.jpg"   />

        //     <User name="Jitendra" email="utmalik@amazon.com" number="134141414" imageUrl="https://m.media-amazon.com/images/S/pv-target-images/16627900db04b76fae3b64266ca161511422059cd24062fb5d900971003a0b70.jpg"   />


        // <User name="Archana" email="utmalik@amazon.com" number="134141414" imageUrl="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"   />


        //          <User name="Utkarsh" email="utmalik@amazon.com" number="13342141414" imageUrl="https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png"   />

        // <User name="Atul" email="atul@amazon.com" number="13413441414" imageUrl="https://ew.com/thmb/SwKIClok9Xl8xo0JZ9MikIqcFZg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/avatar-netflix-012524-ab3f0b6c6176430c963eb64390b9e5c0.jpg"   />

        //     <User name="Jitendra" email="utmalik@amazon.com" number="134141414" imageUrl="https://m.media-amazon.com/images/S/pv-target-images/16627900db04b76fae3b64266ca161511422059cd24062fb5d900971003a0b70.jpg"   />


        // <User name="Archana" email="utmalik@amazon.com" number="134141414" imageUrl="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"   />


        //          <User name="Utkarsh" email="utmalik@amazon.com" number="13342141414" imageUrl="https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png"   />

        // <User name="Atul" email="atul@amazon.com" number="13413441414" imageUrl="https://ew.com/thmb/SwKIClok9Xl8xo0JZ9MikIqcFZg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/avatar-netflix-012524-ab3f0b6c6176430c963eb64390b9e5c0.jpg"   />

        //     <User name="Jitendra" email="utmalik@amazon.com" number="134141414" imageUrl="https://m.media-amazon.com/images/S/pv-target-images/16627900db04b76fae3b64266ca161511422059cd24062fb5d900971003a0b70.jpg"   />


        // <User name="Archana" email="utmalik@amazon.com" number="134141414" imageUrl="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"   /> 