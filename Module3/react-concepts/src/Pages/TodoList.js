import React,{useState, useEffect} from "react";


function TodoList(){


    const [isLoading, setIsLoading]  = useState(true);
    const [todoItems, setTodoItems] = useState([]);

    //     const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

    // if(!isLoggedIn){

    //     return <h1> You are not allowed to accces this page</h1>
    // }


    useEffect(()=>{
        console.log("component did mount")
        setTimeout(()=>{
            const data = ["todoItem1", "todoItem2"];
            setIsLoading(false);
            setTodoItems([...data]);
        },2000)
    },[])

       return <div>

            {
                (isLoading)
                ? <h2> Loading...</h2> 
                :<div>

                    <ul>
                         {
                            todoItems.map((todoItem)=>{
                                return <li> {todoItem} </li>
                            })
                         }

                    </ul>
                </div>
            }
            

        </div>

}






























// class TodoList extends React.Component{

//     constructor(props){
//         console.log("inside the constructor");
//         super(props);

//         this.state = {isLoading:true, todoItems:[]}
//     }

//     componentDidMount(){
//         console.log("component did mount")
//         setTimeout(()=>{
//             const data = ["todoItem1", "todoItem2"];
//             this.setState({isLoading:false, todoItems:[...data]})
//         },2000)
//     }

//     componentDidUpdate(){
//         console.log("component did update");
//     }

//     componentWillUnmount(){
//         console.log("component is about to be unmounted");
//     }

//     render(){
//         console.log("inside the render method");
//         return <div>

//             {
//                 (this.state.isLoading)
//                 ? <h2> Loading...</h2> 
//                 :<div>

//                     <ul>
//                          {
//                             this.state.todoItems.map((todoItem)=>{
//                                 return <li> {todoItem} </li>
//                             })
//                          }

//                     </ul>
//                 </div>
//             }
            

//         </div>
//     }

// }

export default TodoList;



// human / devloper 
// machine : class based components are difficult to minify 
