const { createNewShow, getAllShows, getShowById } = require("../controllers/showController");
const { verifyToken, verifyAdmin } = require("../middlewares/authMiddleware");


module.exports = (app)=>{


    app.post("/shows",[verifyToken, verifyAdmin],createNewShow);

    app.get("/shows",[verifyToken], getAllShows);
    app.get("/showsByMovie",[verifyToken], getAllShows);

    app.get("/shows/:id",[verifyToken],getShowById);


    // app.put("/shows");




}

