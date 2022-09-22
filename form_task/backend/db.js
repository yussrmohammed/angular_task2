const e = require('express')
const mongoose = require('mongoose')

require('dotenv').config()
mongoose.connect(process.env.db).then(()=>{
    console.log('MongoDB connection succeeded.');
}).catch((err)=>{
    console.log(err)
})
module.exports=mongoose