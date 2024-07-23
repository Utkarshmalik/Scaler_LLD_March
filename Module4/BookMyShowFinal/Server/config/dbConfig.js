const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("Connected to DB successfully")
    })
    .catch((err)=>{
        console.log(err);
    })
