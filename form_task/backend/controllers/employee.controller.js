const router= require('express').Router()
const { ob } = require('mongoose');

const employeeModel = require('../models/employee.model');
const Employee= require('../models/employee.model')
const verify = require('../middleware/token_verfication')

router.post('/add',verify,async (req,res)=>{
    let emp= new Employee({
        employeename:req.body.employeename,
        email:req.body.email,
        phonenumber:req.body.phonenumber,
        gender:req.body.gender,
        address:req.body.address
    });
    try {
        const savedUser = await emp.save()
        res.send(savedUser)
    } catch (error) {
        res.status(400).send(err)
    }
   
})
router.get('/', verify,async(req,res)=>{
    const all= await Employee.find({})
    res.send(all)
})
router.get('/:id',async(req,res)=>{
const id= req.params.id
try {
    const userData =await Employee.findById(id)
    res.send(userData)
    
} catch (error) {
    res.send(error)
    
}


})
router.delete('/:id',verify, async (req,res)=>{
    const id= req.params.id
try {
    const userData =await Employee.findByIdAndRemove(id)
    res.send(userData)
    
} catch (error) {
    res.send(error)
    
}

})

router.put('/:id', verify,async (req,res)=>{
    const id= req.params.id

try {
    const userData =await Employee.findByIdAndUpdate(id, {

        employeename:req.body.employeename,
        email:req.body.email,
        phonenumber:req.body.phonenumber,
        gender:req.body.gender,
        address:req.body.address
    })
    res.send(userData)
    
} catch (error) {
    res.send(error)
    
}

})

module.exports=router