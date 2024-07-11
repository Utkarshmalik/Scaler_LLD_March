

//Import the express module 
const express = require('express');

//Create an instance of an Express application 
const app  = express();

const productsDB = require("./productDB");


const logger = (req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
}

app.use(logger);


app.get("/",(req,res)=>{
    res.send('Home Page');
})

app.get("/products",(req,res)=>{
    try{
    const productsData = productsDB.productsData;
    res.status(200).send(productsData);
    }
    catch(e){
        res.status(500).send({message:"Something went wrong"});
    }
})

app.get("/products/:id",(req,res)=>{

     try{
         const id = req.params.id;
        const allProducts   = productsDB.productsData;
        
        const requiredProduct = allProducts.find(product => product.id == id);

        if(!requiredProduct){
            res.status(404).send({message:`The passed productId:[${id}] is invalid`});
        }

        res.status(200).send(requiredProduct);
   
    }
    catch(e){
        res.status(500).send({message:"Something went wrong"});
    }
   
})

app.delete("/products",(req,res)=>{
      try{
        productsDB.productsData = [];
        res.status(200).send({message:"All prooudcts are deleted successfully"});
    }
    catch(e){
        res.status(500).send({message:"Something went wrong"});
    }
})


app.delete("/products/:id",(req,res)=>{
      try{

        const id = req.params.id;
        const allProducts   = productsDB.productsData;
        
        const requiredProduct = allProducts.find(product => product.id == id);

        if(!requiredProduct){
            res.status(404).send({message:`The passed productId:[${id}] is invalid`});
        }

        //delete a product 
        const newProducts  = allProducts.filter((product)=> product.id!=id);
        productsDB.productsData = newProducts;

        
        res.status(200).send({message:`Product with id: ${id} has been deleted successfully`});
    }
    catch(e){
        res.status(500).send({message:"Something went wrong"});
    }
})










//control is reaching here 
// do something that runs for all my requests and send a invalid path error in that 
app.use((req,res)=>{
    res.status(404).send('Sorry! Invalid Path')
});

//Defining a PORT number
const port = 3000;


//make the app listen on some defined port 
app.listen(port, ()=>{
    console.log(`Server is running successfuly on port:${port}`)
})