const ProductModel = require("../Models/product.model");


const createProduct = async (req,res)=>{

            const productData = {
                price:req.body.price,
                name:req.body.name,
                description:req.body.description,
                category:req.body.category
            };

            const newProduct = new ProductModel(productData);

            try{
                const response = await newProduct.save();
                return res.status(201).send(response);
            }
            catch(err){

                if("ValidatorError"==err.errors.category.name){
                    return res.status(400).send({message:err.errors.category.message});
                }

                return res.status(500).send({message:"Internal Server Error ", err});
            }
}

const getAllProducts = async (req,res)=>{
            try{
                const dbResponse = await ProductModel.find({});
                return res.status(200).send(dbResponse);
            }
            catch(err){
                return res.status(500).send({message:"Internal Server Error ", err});
            }
}

const getProductViaId = async (req,res)=>{

            const id = req.params.id;

            try{
                const dbResponse  = await ProductModel.findById(id);

                if(dbResponse==null){
                    return res.status(400).send({message:"Object id passed is invalid"});
                }
                
                return res.status(200).send(dbResponse);
                
            }
            catch(err){
                return res.status(500).send({message:"Internal Server Error ", err});
            }
}

const updateProductViaId = async (req,res)=>{

            const id =req.params.id;
            
            const updateDetails = req.body;

            try{
                const response = await ProductModel.findByIdAndUpdate(id,updateDetails,{
                    new:true
                });

                if(!response){
                    return res.status(400).send({message:"Object id passed is invalid"});
                }

                return res.status(200).send(response);

            }
            catch(err){
                return res.status(500).send({message:"Internal Server Error ", err});

            }
}


const deleteProductViaId = async (req,res)=>{

            const id = req.params.id;

            try{
            const response  = await ProductModel.findByIdAndDelete(id);

            if(!response){
                    return res.status(400).send({message:"Object id passed is invalid"});
                }

                return res.status(200).send({message:`Product with id${id} deleted successfully`})

            }
            catch(e){
                return res.status(500).send({message:"Internal Server Error ", err});
            }

}

module.exports = {createProduct, getAllProducts, getProductViaId, updateProductViaId, deleteProductViaId};