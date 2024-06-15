


const registerUser =({name,email,userId})=>{

    return {
        subject : "Welcome to Movie Booking App",
        html:`

        <div>

        <h4> Hello ${name} , </h4>

        <br/>

        You have registered successfully to the Movie Booking Application  with email ${email}
       
        <br/>

        You can login anytime with userId : ${userId}

        <br/>
        <br/>
        <br/>


        <hr/>

        Thanks and Regards 
        <h3> Movie Booking Core Team </h3>
        <img src="https://p.kindpng.com/picc/s/731-7317653_movietickets-data-due-diligence-logo-movietickets-hd-png.png" height="100"  width="100" />

        </div>
        
        
        `

    }

}

const paymentSuccess =()=>{

}

const paymentFailed = ()=>{

}

const movieAdded = ()=>{


}


module.exports ={
    registerUser,
    paymentSuccess,
    paymentFailed,
    movieAdded
}

