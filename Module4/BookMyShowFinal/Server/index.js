const express = require("express");
const mongoose = require("mongoose");
const bodyParser =  require("body-parser");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require('express-mongo-sanitize');

require('dotenv').config()
require('./config/dbConfig');

const cors = require('cors');
const { Db } = require("mongodb");

const app = express();


const apiLimiter = rateLimit({
    windowMs:15*60*1000,
    max:100,
    message:"Too mant requests from this IP, please try again aftr 15 minutes"
});


app.use(apiLimiter);
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

//// Apply the mongoSanitize middleware to sanitize all incoming requests
app.use(mongoSanitize());


require("./routes/movieRoutes")(app);
require("./routes/theatreRoutes")(app);
require("./routes/userRoutes")(app);
require("./routes/showRoutes")(app);
require("./routes/bookingRoutes")(app);



//Defining a PORT number
const port = process.env.PORT;

//make the app listen on some defined port 
app.listen(port, ()=>{
    console.log(`Server is running successfuly on port:${port}`)
})




//beta gamma and prod 
