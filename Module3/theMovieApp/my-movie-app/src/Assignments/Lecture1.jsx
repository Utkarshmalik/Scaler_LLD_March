


// //Q1

// // import { useEffect, useState } from "react";
// // import { BrowserRouter, Route, Router, Routes, useLocation, useParams, useSearchParams } from "react-router-dom";

// // function Greeting(props) {

// //     let {age, occupation} = props;
// //     let name="Jasbir";
// //     return (
// //          <h1> Hello {name} Thanks Babel :) is {age} old and works as {occupation}  </h1>
// //     );
// // }


// //Q2

// // function HELLOPARENT() {
// //            return <div>
// //                <HELLO name = {"Rohan"} age = {10}></HELLO>
// //                <HELLO name = {"Rajneesh"} age = {30}></HELLO>
// //                <HELLO name = "Krishna" age = {40}></HELLO>
// //                <HELLO ></HELLO>
// //                <BYE></BYE>
// //                </div>
// //        }



// // function Item({ name, isPacked }) {
// //   return (
// //     <li className="item">
// //       {name} {isPacked ? '✔' : '❌'}
// //     </li>
// //   );
// // }



// // function ItemList({list}) {
// //     // Implement the ItemList component to render the list of stationary items here
// //     return (
// //         <ul>
// //             {list.map((item) => (
// //                 <li >{item}</li>
// //             ))}
// //         </ul>
// //     );
// // }





// // function ItemList({list}) {
// //     // Implement the ItemList component to render the list of stationary items here
// //     return (
// //         <ul>
// //             {list.map((item, idx) => (
// //                 <li key={item.id}>{item.name}</li>
// //             ))}
// //         </ul>
// //     );
// // }


// // import { useState } from 'react';
// // import { sculptureList } from './data.js';

// // export default function Gallery() {
// //   const [index, setIndex] = useState(0);
// //   const [showMore, setShowMore] = useState(false);

// //   function handleNextClick() {

// //     if(index+1<=sculptureList.length-1){
// //         setIndex(index + 1);
// //     }
    
// //   }

// //   function handleMoreClick() {
// //     setShowMore(!showMore);
// //   }

// //   let sculpture = sculptureList[index];
// //   return (
// //     <>
// //       <button onClick={handleNextClick}>
// //         Next
// //       </button>
// //       <h2>
// //         <i>{sculpture.name} </i> 
// //         by {sculpture.artist}
// //       </h2>
// //       <h3>  
// //         ({index + 1} of {sculptureList.length})
// //       </h3>
// //       <button onClick={handleMoreClick}>
// //         {showMore ? 'Hide' : 'Show'} details
// //       </button>
// //       {showMore && <p>{sculpture.description}</p>}
// //       <img 
// //         src={sculpture.url} 
// //         alt={sculpture.alt}
// //       />
// //     </>
// //   );
// // }




// //  function InputCounter(props){

// //     const [count,setCount] = React.useState(value);

// //         const increment = () => {
// //             setCount(count + 1);
// //         }
// //         const decrement = () => {
// //             setCount(count + 1);
// //         }

// // }


// // ReactDOM.render(<InputCounter></InputCounter>, document.getElementById("root"));


// // import React from 'react';
// // import { BrowserRouter, Routes, Route } from 'react-router-dom';

// // // ... (Component imports)

// // // Replace these with your actual components
// // const Home = () => <h1>Home Page</h1>;
// // const Profile = () => <h1>Profile Page</h1>;
// // const Listing = () => <h1>Listing Page</h1>;
// // const Product = () => <h1>Product Page</h1>;


// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         <Route path="/home/profile" element={<Profile />} />
// //         <Route path="/listing" element={<Listing />} />
// //         <Route path="/" element={<Home />} />
// //         <Route path="/home" element={<Home />} />
// //         <Route path="/product" element={<Product />} />
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }

// // export default App;


// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // const Navbar = () => {
// //   return (
// //     <nav>
// //       <ul>
// //         <li>
// //           <Link to="/">Home</Link>
// //         </li>
// //         <li>
// //           <Link to="/home/profile">Profile</Link>
// //         </li>
// //         <li>
// //           <Link to="/listing">Listing</Link>
// //         </li>
// //       </ul>
// //     </nav>
// //   );
// // };

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <div>
// //         <Navbar /> {/* Render the navbar outside of Routes */}
// //         <Routes>
// //           <Route path="/" element={<Home />} />
// //           <Route path="/home/profile" element={<Profile />} />
// //           <Route path="/listing" element={<Listing />} />
// //         </Routes>
// //       </div>
// //     </BrowserRouter>
// //   );
// // }

// // export default App;




// // export function App() {
// //   return (
// //     <BrowserRouter>
// //       {/* Implement the template route and component here */}
// //       <Routes>
// //       <Route path="/users/:id/:pid/:bid/:kid" element={<Users />} />
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }

// // function Users(props) {

// //     async function fetchData(){
// //          const resp = await fetch(`https://fakestoreapi.com/users/${params.id}`)
// //             const userData = await resp.json();
// //             console.log(userData);
// //             setUser(userData);

// //     }

// //     const [userId, setUserId] = useState(null);
// //     const [userDetails, setUserDetails]= useState(null);

// //     let params = fetchUserId();
// //   let location = useLocation();

// //     console.log(location);
    
// //     console.log(params);
// //     let [user,setUser] = useState(null);

//     // useEffect(async ()=>{
//     //   userId = await fetchUserId();
//     //   userDetails = await fetchUserDetails(userId);
//     //   setUserDetails(userDetails);
      
//     // },[])

//     // useEffect(async ()=>{

//     //   newuserDetails = await fetchUserDetails(userId);

//     //   setUserDetails(newuserDetails);


//     // },[userId])

//     // useEffect(async ()=>{
//     //   newuserId = await fetchUserId();

//     //   setUserId(newuserId);

//     // },[])


// // return <>
// //         {user == null ? <h3>...loading</h3> : <>
// //             <h4>User Name: {user.username}</h4>
// //             <h3> Name: {user.name.firstname + " " + user.name.lastname}</h3>
// //             <h4> Phone: {user.phone}</h4>
// //         </>}
// //     </>
// // }




// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }


// // import React from 'react';


// // const App = () => {

// //   // Edit this component
// //   /***
// //    * * Do not edit the data-testid attributes.
// //     * Use key inputValue to store the data in local storage.
// //    * */ 

// //   const [value, setValue] =  useState(localStorage.getItem('inputValue') || '');

// //   const handleChange=(e)=>{
// //     setValue(e.target.value);
// //     localStorage.setItem("inputValue",e.target.value);
// //   }


// //   return (
// //     <div>
// //       <input data-testid='input-id' value={value} onChange={handleChange} type="text"/>
// //     </div>
// //   );
// // };
// // export default App; 


// // import { useState } from 'react';

// // export default function App() {
// //   const [score, setScore] = useState(0);

// //   function increment(incrmement) {
// //     setScore(score + incrmement);
// //   }

// //   return (
// //     <>
// //       <button onClick={() => increment(1)}>+1</button>
// //       <button onClick={() => { increment(3) }}>+3</button>
// //       <h1>Score: {score}</h1>
// //     </>
// //   )
// // }





// import React from 'react';
// export const SettingsContext = React.createContext();

// export  function SettingProvider({children}){
    
//      const [theme, setTheme] = React.useState('light');
//    const [language, setLanguage] = React.useState('English');

//    return (

//     <SettingsContext.Provider value={{theme,language,setTheme:toggleTheme, setLanguage:toggleLanguage}} >
//         {children}
//     </SettingsContext.Provider>
//    )

// }


// //App.js

// import React from 'react';
// import { SettingsProvider } from './SettingsContext';
// import UserSettings from './UserSettings';
// import Profile from './Profile';

// function App() {
//   return (
//     <SettingsProvider>
//       <UserSettings />
//       <Profile />
//     </SettingsProvider>
//   );
// }

// export default App;