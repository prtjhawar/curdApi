const express = require('express');
const routre =  express.Router();
const Product = require('../models/product.js')
const data = require('../data.json');
const product = require('../models/product.js');

//Add product
routre.post('/', async (req, res) => {
    const product = new Product(req.body);
    data.push({product})
    try {
        const savedProduct = await product.save();

        res.status(201).send(savedProduct);
    } catch (err) {
        res.status(400).send(err);
    }
});

//get all product
routre.get('/',async(req,res)=>{
    try {
        const product = await Product.find();
        // return res.json(data)
        res.status(200).send(product);
    } catch (err) {
        res.status(500).send(err);
    }

});

routre.get('/api/:id',async(req,res) =>{
    try {
        const {id} =req.params;
        const product = await Product.findById(id);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
});
//update a product
routre.put('/api/:id',async(req,res) =>{
    try {
        const {id} =req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);

        if (product){
            const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct)
            
        }else{
        
            return res.status(404).json({message: "product not found"})
        }


    } catch (error) {
        res.status(500).json({message:error.message})
    }
});

// delete a product

routre.delete('/api/:id' , async(req,res)=>{
    try {
        const {id} = req.params;
        const product =  await Product.findByIdAndDelete(id);
        if (product){
            // const deletedProduct = await Product.findById(id);
            return res.status(200).json({message: "product delete successfully"})
            
        }
        res.status(400).json({message: "product not found"})
        
            
        


    } catch (error) {
        res.status(500).json({message:error.message})
    }

})











module.exports = routre;