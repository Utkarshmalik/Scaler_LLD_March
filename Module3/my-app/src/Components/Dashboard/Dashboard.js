import Navbar from "../Navbar/Navbar";
import "./Dashboard.css";
import UserList from "../UserList/UserList";
import { useState } from "react";
import usersData from "./userData";


function Dashboard(props){

    const [users, setUsers] = useState(usersData);
    const [searchValue, setSearchValue] = useState("");

    const onInputChange = (e)=>{
        console.log(users);
        
        const updatedSearchValue = e.target.value;

        //get my updated set of users that starts with searchValue 

        const updatedUsers = usersData.filter((user)=>{

            const fullName = user.firstName + " " + user.lastName;

            return  fullName.toLowerCase().startsWith(updatedSearchValue.toLowerCase());
            
        })

        console.log(updatedUsers);

        setSearchValue(updatedSearchValue);
        setUsers(updatedUsers);
    }


    return <div style={{background:"black",color:"white",height:"100%"}} > 



    <Navbar users={users} onLogout={props.onLogout} />
    
        <h1> User Dashboard  </h1>

        <div className="search">
            <input value={searchValue} onChange={onInputChange} type="text" placeholder="search" />

        </div>

        <UserList users={users} setUsers={setUsers} />
       
    </div>
}


export default Dashboard;


