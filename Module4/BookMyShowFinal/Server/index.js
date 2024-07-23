const express = require("express");
const mongoose = require("mongoose");
const bodyParser =  require("body-parser");
require('dotenv').config()
require('./config/dbConfig');

const cors = require('cors');
const { Db } = require("mongodb");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


require("./routes/movieRoutes")(app);
require("./routes/theatreRoutes")(app);
require("./routes/userRoutes")(app);




//Defining a PORT number
const port = process.env.PORT;

//make the app listen on some defined port 
app.listen(port, ()=>{
    console.log(`Server is running successfuly on port:${port}`)
})




//beta gamma and prod 
