const express = require("express");
const mongoose = require("mongoose");
const bodyParser =  require("body-parser");
const { ObjectId } = require("mongodb");
const productRoutes = require("./src/Routes/product.routes");
const authRoutes = require("./src/Routes/auth.routes");
const cors = require('cors')

const app = express();

mongoose.connect(
    "mongodb+srv://utkarshnew:qwerty123@cluster0.85op4lq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(()=>{
        console.log("Connected to DB successfully")
    })
    .catch((err)=>{
        console.log(err);
    })


    app.use(cors());

    app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
   app.use(bodyParser.json())

   


   productRoutes(app);
   authRoutes(app);




//Defining a PORT number
const port = 3000;


//make the app listen on some defined port 
app.listen(port, ()=>{
    console.log(`Server is running successfuly on port:${port}`)
})