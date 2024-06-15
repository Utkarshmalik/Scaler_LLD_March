const { signUp, signIn } = require("../controllers/auth.controller");
const { verifySignUpRequest, verifySignInRequest } = require("../middlewares/auth.middlewares");


module.exports= function(app){
    app.post("/mba/api/v1/auth/signup",[verifySignUpRequest],signUp);
    app.post("/mba/api/v1/auth/signin",[verifySignInRequest],signIn);

}