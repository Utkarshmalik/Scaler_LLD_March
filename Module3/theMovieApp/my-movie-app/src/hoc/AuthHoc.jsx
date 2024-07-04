

function AuthHoc(props){


    const userDetails = JSON.parse(localStorage.getItem("userDetails"));

    const isAuthenticated = userDetails!=null;

    if(!isAuthenticated){

        return <h1> You are not loggedIn. Please login first and then
            try to access this page
             </h1>
    }

    return <div>
        {props.children}
    </div>
    
}

export default AuthHoc;