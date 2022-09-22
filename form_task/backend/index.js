const express= require('express')
const cors=require('cors')
const bodyParser= require('body-parser')
require('dotenv').config()
const {Mongoose}= require('./db')
const app= express()
const  employeeRouter= require('./controllers/employee.controller')
const userRouter= require('./controllers/user.controller')
app.use(bodyParser.json())

app.use(cors({origin:'http://localhost:4200'}))

app.use('/employee', employeeRouter)
app.use('/user',userRouter)
app.listen(process.env.port,
    ()=>{
        console.log('Server started at port : ' + process.env.port)
    })