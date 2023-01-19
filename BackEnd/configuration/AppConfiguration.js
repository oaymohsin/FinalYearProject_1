const dotenv=require('dotenv');

let MyEnvironment={};
if(process.env.NODE_ENV==='development'){
    MyEnvironment=dotenv.config({path:`${__dirname}/../Application-Configuration-Dev.env`})
}