const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const dbConfigs = require("./src/configs/db.configs");
const serverConfigs = require("./src/configs/server.configs");
const bodyParser = require("body-parser");
const userModel = require("./src/models/user.model");
const bcrypt = require("bcrypt");
var cors = require('cors')

const app = express();

app.use(cors())


mongoose.connect(dbConfigs.DB_URL)
.then(()=>{
    console.log("connected to DB successfully");
})

app.use(bodyParser.json());

//initialiseRootUser();

require("./src/routes/movie.route")(app);
require("./src/routes/theatre.routes")(app);
require("./src/routes/auth.routes")(app);
require("./src/routes/booking.routes")(app);
require("./src/routes/payment.routes")(app);



app.listen(serverConfigs.PORT, ()=>{
    console.log(`Application is running on PORT ${serverConfigs.PORT}`)
})


async function initialiseRootUser(){

    const userDetails = {
    name:"admin",
    userId:"admin",
    email:"admin@gmail.com",
    password:"qwerty123",
    userType:"ADMIN",
    userStatus:"APPROVED"
}

try{

    const user = await userModel.updateOne({name:"admin"},{
          password: bcrypt.hashSync(userDetails.password, 8)
    });
    console.log(user);

}catch(err){
    console.log("Error ",err);
}
  

}