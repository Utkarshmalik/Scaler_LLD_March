const { signUp, login, getCurrentUser } = require("../controllers/userController");
const { verifyToken } = require("../middlewares/authMiddleware");


module.exports = (app)=>{
app.post("/register",signUp);
app.post("/login", login);
app.get("/user", verifyToken, getCurrentUser);

}

