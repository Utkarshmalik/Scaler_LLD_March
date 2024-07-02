import React from "react";


class Counter extends React.Component { 

    constructor(props){
        console.log("inside the class constructor")
        super(props);
        this.state = {count:0}; //define the initial state 
    }

    componentDidMount(){
       console.log("inside component did mount");
    }

    onIncrement = ()=>{
        this.setState({count:this.state.count+1});
    }

    render(){
        console.log("inside the render method");
        return(
        <div>
            <p> Count : {this.state.count} </p> 
            <button onClick={this.onIncrement}> Increment </button>
        </div>
        )
    }
}



// function Counter(){

//     const [count, setCount] = useState(0);

//     const onIncrement = ()=>{
//         setCount(count+1);
//     }

//     return (

//         <div>
//             <p> Count : {count} </p>

//             <button onClick={onIncrement} > Increment </button>
//         </div>

//     )


// }

export default Counter;