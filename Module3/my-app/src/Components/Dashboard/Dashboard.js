import Navbar from "../Navbar/Navbar";
import "./Dashboard.css";
import UserList from "../UserList/UserList";
import { useEffect, useState } from "react";
import Loader from "../common/Spinner/Spinner";

var usersData=null;

function Dashboard(props){

    console.log("Inside Dashbaord Component");

    const [users, setUsers] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(()=>{
        console.log("making an API call");

        fetch('http://dummyjson.com/users')
        .then(res => res.json())
        .then((res)=>{
             usersData = res.users;
             console.log(usersData);
             setIsLoading(false);
             setUsers(res.users);
        })
        .catch(err=>{
            setIsLoading(false);
            setIsError(true);
        })
    },[]);

    const onInputChange = (e)=>{
        console.log(usersData);
        
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


    return <div className="min-height-vh-100" style={{background:"black",color:"white",height:"100%"}} > 



    <Navbar users={users} onLogout={props.onLogout} />
    
        <h1> User Dashboard  </h1>

        <div className="search">
            <input value={searchValue} onChange={onInputChange} type="text" placeholder="search" />

        </div>

        {
            (isLoading) ? <Loader/> : 
                    <UserList users={users} setUsers={setUsers} />

        }

        {

            isError && 
            <h4 className="text-center"> Unable to fetch data  </h4>

        }

       
    </div>
}


export default Dashboard;


