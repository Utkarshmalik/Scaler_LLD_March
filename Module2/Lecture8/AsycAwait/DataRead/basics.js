

// const httpPromise  = fetch('https://jsonplaceholder.typicode.com/todos/10');

// the Response.json() method is used to asynchronously parse the response body of a fetch request as JSON

// httpPromise
// .then((res)=>{
//     return res.json()
// })
// .then((data)=>{
//     console.log(data);
// })








// promise
// .then((res)=>{
//     const bodyPromise = res.json();

//     bodyPromise.then((data)=>{
//         console.log(data);
//     })
    
// })
// .catch((err)=>{
//     console.log(err)
// })







// function fetchData(){
//     const responsePromise  = fetch('https://jsonplaceholder.typicode.com/todos/10');
//     responsePromise.then((res)=>{
//         console.log(res);
//         return res.json()
//     })
//     .then((data)=>{
//         console.log(data);
//     })

// }

fetchData();






async function  fetchData(){
    const res  = await fetch('https://jsolaceholder.typicode.com/todos/10');
    const data = await res.json();
   return data;
}

async function getAndPrintData(){
    var data;
    try{
     data = await fetchData();
    }
    catch(err){
        data=null;
    }
    console.log(data);
}

getAndPrintData()


