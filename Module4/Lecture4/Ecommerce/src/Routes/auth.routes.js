const { signUp, signIn } = require("../Controllers/auth.controller");


module.exports= (app)=>{
    
    app.post("/ecomm/api/v1/auth/signup", signUp);
    app.post("/ecomm/api/v1/auth/signin", signIn);

}

