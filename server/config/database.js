// const mongoose=require('mongoose');



//  exports.connectToDB= async ()=>
// {
//      await mongoose.connect('mongodb://127.0.0.1:27017/Quizzy');
//      console.log('datebase connected..')
// }


exports.connectToDB

const mongoose = require("mongoose")
require("dotenv").config();

exports.connectToDB = () => {
    mongoose.connect(process.env.DB_URL,{})
    .then(() => {
        console.log("Database connection successfull")
    })
    .catch((e) => {
        console.log("Error occurred while connecting to DB")
        console.error(e);
        process.exit(1);
    })
} 