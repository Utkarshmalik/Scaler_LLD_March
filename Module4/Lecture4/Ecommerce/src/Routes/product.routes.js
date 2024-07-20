
//role function : is to take app as input and initiliase all my product related routes
const { createProduct, getAllProducts, getProductViaId, updateProductViaId, deleteProductViaId } = require("../Controllers/product.controller");
const { verifyToken, verifyAdminOrSeller, verifyAdmin } = require("../Middlewares/authMiddleware");



module.exports = (app)=>{
        //create a new product
        app.post("/products",[verifyToken, verifyAdminOrSeller],createProduct)

        //get all products
        app.get("/products",getAllProducts);

        //get a product via productId
        app.get("/products/:id",[verifyToken], getProductViaId)

        //update a product via given id 
        app.put("/products/:id", [verifyToken, verifyAdminOrSeller],updateProductViaId)

        //delete a product via productId

        app.delete("/products/:id",[verifyToken, verifyAdmin], deleteProductViaId)
}





















