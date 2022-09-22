const mongoose=require('mongoose')
const {Schema}=mongoose

const employeeSchema= new Schema({
    employeename :{
        type:String,
        requried:true,
        
    },
    email:{
        type:String,
        requried:true,
        


    },
    phonenumber:{
        type:String,
        requried:true,

    },
    address:{
        type:String,
        requried:true,

    },
    gender:{
        type:String,
        requried:true,

    }

})



module.exports= mongoose.model('Employee' , employeeSchema)