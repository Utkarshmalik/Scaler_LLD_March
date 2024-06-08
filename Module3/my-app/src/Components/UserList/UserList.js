import User from "../User/User";

function UserList(props){

    const {users, setUsers} = props;

    
    function onUserDelete(id){
        console.log("Delete the user with userId: ",id);

        const updatedUsers = users.filter((user)=>{
            return user.id!=id;
        })

        setUsers(updatedUsers);
    }

        return  <div className="users"> 
            {
                users.map((userObj)=>{
                    return <User onUserDelete={onUserDelete} userObj={userObj} />
                })
            }
    </div>

}

export default UserList;