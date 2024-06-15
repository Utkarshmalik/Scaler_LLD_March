const mongoose = require("mongoose");

const verifyIdParam = (req, res, next)=>{
      if(!mongoose.isValidObjectId(req.params.id)){
            return res.status(400).send({message:"Invalid Object Id Format"});
    }
    next();
}


module.exports={
    verifyIdParam
}