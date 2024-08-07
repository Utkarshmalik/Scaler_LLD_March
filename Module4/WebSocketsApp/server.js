
const express = require("express");
const http  =require("http");
const socketIO = require("socket.io");

const app = express();
const server  = http.createServer(app);

const io= socketIO(server);

//serve some file 

//Serving the HTML file 
app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

// io.on('connection', (socket) => { ... }): Listens for new connections to the WebSocket server. The callback function is called whenever a new client connects, with the socket parameter representing the client's socket connection.


//Websocket connection
// io.on('connection',(socket)=>{
//     console.log("a user connected ");

//     //Handle the message from the client 

//     // socket.on('message', (msg) => { ... }): Listens for 'message' events from the client. The msg parameter contains the message sent by the client.
//     socket.on('message',(msg)=>{
//         console.log('message from client '+ msg);

//         //replying
//         io.emit("message", "Hey I am a Server , sending you some brodcast message");
//     })


//     //client disconnects 
//     socket.on('disconnect',()=>{
//         console.log("User has disconnected");
//     })

// });





io.on("connection",(socket)=>{

    console.log(`a user has connected with clientId ${socket.id}`);

    //Join a room 
    socket.on('joinRoom',(room)=>{
        socket.join(room);

        console.log(`User ${socket.id} joined room ${room}`)

        socket.to(room).emit('server_message',"A new user has joined");
    })

        //Leave a room 
    socket.on('leaveRoom',(room)=>{
        socket.leave(room);
        console.log(`User ${socket.id} left room ${room}`)
    })

    //Handle Messages to a room

    socket.on("roomMessage",({room,message})=>{

        console.log(`Message to ${room} : ${message}`)


        io.to(room).emit('roomMessage',message);

    })
    


})














server.listen(3000,()=>{
    console.log("Listening on port 3000");
})