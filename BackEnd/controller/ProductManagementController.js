const ProductModel= require ('../models/ProductManagementModel');
const fs=require('fs');

const ProductData= async (req,res) =>{
    try {
        const {productname,productquantity,productprice,companyname,color,size,description,productcateogary}= req.body;
        let ImageDetails=[];
        // L,MSXL
        let Size=size.split(',');
        req.files.forEach(imagearrayobject => {
            const {filename,originalname,mimetype}=imagearrayobject;
            ImageDetails.push({
                ImageUrl:`assets/Product/${productname}/${filename}`,
                ImageName:originalname,
                ImageMimeType:mimetype
            })
        });

        const doctoCreate= new ProductModel({
            productname,productquantity,productprice,companyname,color,size:Size,description,productcateogary,
            imageDetails:ImageDetails
        })
        const docToSave= await doctoCreate.save();
        res.json({
            Message:'Date Saved Successfully',
            Body:docToSave,
            Data:true
        })

    } catch (error) {
        res.json({
            Message:error.message,
            Result:null,
            Data:false
        })
    }
}

const GetAllProducts= async (req,res)=>{
    try {
        const docToGet=await ProductModel.find();
        res.json({
            Message:"All documents Found",
            Data:true,
            Result:docToGet
        })
    } catch (error) {
        res.json({
            Message: error.mesage,
            Result: null,
            Data: false
        })
    }
}

const GetProductById= async(req,res)=>{
    try {
        const Id=req.params._id;
        const docToFind= await ProductModel.findOne({_id:Id})
        res.json({
            Message:'Data Found Successfuly',
            Data:true,
            Result:docToFind
        })
    } catch (error) {
        res.json({
            Message: error.mesage,
            Result: null,
            Data: false
        })
    }
}
const DeleteProductById = async (req, res) => {
    try {
        const Id = req.params._id;
        const DocToDelete = await ProductModel.updateOne(
            { _id:Id },
            { $set:{softDeleteStatus:1} }
            );
            // const docToDelete = await ProductModel.deleteOne(
            //     { _id:Id }
            // )
        res.json({
            Message: 'Document Deleted Successfuly',
            Data: true,
            Result: DocToDelete
        })
    } catch (error) {
        res.json({
            Message: error.mesage,
            Result: null,
            Data: false
        })
    }
}

const HardDelete = async (req, res) => {
    try {
        const Id = req.params._id;
        const docToget = await ProductModel.findOne({_id:Id}).lean();
       
        if(!!docToget){
            const docToDelete = await ProductModel.deleteOne({
                _id:docToget._id
            })
            docToget.imageDetails.forEach(pathOfFiles => {
                fs.unlinkSync(`${pathOfFiles.ImageUrl}`);
            })
            fs.rmdirSync(`../assets/Product/${docToget.productname}`);
            res.json({
                Message:'Deleted',
                Data:true,
                Result:docToDelete
            })
        }else{
            res.json({
                Message:'Not Deleted',
                Data:true,
                Result:null
            })
        }
    } catch (error) {
        res.json({
            Message: error,
            Result: null,
            Data: false
        })
    }
}

module.exports={
    ProductData,
    GetAllProducts,
    GetProductById,
    DeleteProductById,
    HardDelete
}