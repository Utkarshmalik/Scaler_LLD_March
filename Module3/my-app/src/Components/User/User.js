
import "./User.css";

function User(props){

    const userData  = props.userObj;

    return <div className="user" >

         <img height={"100px"} width={"130px"} src={userData.image} />
        
        <h4> {userData.firstName+ " " + userData.lastName} </h4>

        <p> {userData.email} </p>

        <p> {userData.phone} </p> 

    </div>
}

export default User;






