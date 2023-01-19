//Acquiring dependencies
const express =require('express')
const Router=express.Router()

//Calling my Controllers
    const{ProductData,GetAllProducts,GetProductById}=require('../controller/ProductManagementController')

//Calling my Controllers

//Calling Middlewares
const{UploadProductImage}=require('../middlewares/UploadMedia')
//Calling Middlewares

Router.post('/ProductData',UploadProductImage.array('images',20),ProductData);
Router.get('/GetAllProducts',GetAllProducts)
Router.get('/GetProductById/:_id',GetProductById)


module.exports=Router;