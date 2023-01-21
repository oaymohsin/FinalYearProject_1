//Acquiring dependencies
const express =require('express')
const Router=express.Router()

//Calling my Controllers
    const{ProductData,GetAllProducts,GetProductById,DeleteProductById}=require('../controller/ProductManagementController')

//Calling my Controllers

//Calling Middlewares
const{UploadProductImage}=require('../middlewares/UploadMedia')
//Calling Middlewares

Router.post('/ProductData',UploadProductImage.array('images',20),ProductData);
Router.get('/GetAllProducts',GetAllProducts)
Router.get('/GetProductById/:_id',GetProductById)
Router.delete('/DeleteProductById/:_id',DeleteProductById)
Router.delete('/HardDelete/:_id',DeleteProductById)



module.exports=Router;