//Block Start Dependencies
const express=require ('express');
const cors=require('cors');
const path=require('path');
const AppConfiguration=require('./configuration/AppConfiguration')
const DataBaseConfiguration=require('./configuration/DataBaseConfiguration')
//Block Start Dependencies

//Block Start Initialize the app
const app=express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.text())
app.use(express.raw())
app.use(cors())
app.use('/assets',express.static('assets'))
const PORT=process.env.PORT || 4455;
//Block End Initialize the app

//Start Block Setting the Headers for your Application
app.all('*',(req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
        //Mehtod is a property which help us to use the Methods by request. Browers send the options request before your Mthods request
    }
    next();
})
//Start Block Setting the Headers for your Application

//Start Block Accessing the Routes in the Entry Point
const _ProductManagementRoute=require('./routes/ProductManagementRoute')

//Using Routes
app.use('/ProductManagement',_ProductManagementRoute)
//Using Routes

//Start Block Checking Routes As express not found Url not Founded we need to do it explicitly 
app.use((req, res, next) => {
    const error = new Error('Url not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        }
    })
});
//End Block Checking Routes As express not found Url not Founded we need to do it explicitly  

//Start Block for listening your app on defined port
app.listen(PORT,()=>{
    console.log(`Your app is listening on Port ${PORT}`)
    
    
})
//End Block for listening your app on defined port
