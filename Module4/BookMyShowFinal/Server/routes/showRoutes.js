const { createNewShow, getAllShows, getShowById } = require("../controllers/showController");
const { verifyToken, verifyAdmin } = require("../middlewares/authMiddleware");


module.exports = (app)=>{


    app.post("/shows",[verifyToken, verifyAdmin],createNewShow);

    app.get("/shows",[verifyToken, verifyAdmin], getAllShows);
    app.get("/showsByMovie",[verifyToken, verifyAdmin], getAllShows);

    app.get("/shows/:id",[verifyToken,verifyAdmin],getShowById);


    // app.put("/shows");




}

