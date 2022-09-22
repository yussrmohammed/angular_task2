const router= require('express').Router()
const User=require('../models/user.model')
const bcrypt=require('bcryptjs');
const jwt = require('jsonwebtoken')
router.post('/register', async (req,res)=>{
    require('dotenv').config()

    const salt = await bcrypt.genSalt(10);
    const hasedPassword= await bcrypt.hash(req.body.password,salt)
    const  user= new User({
        username:req.body.username,
        email :req.body.email,
        password: hasedPassword
    })
    try {
        const savedUser= await user.save()
        res.send(savedUser)
    } catch (error)
     {
        res.status(400).send(error)  
    }

})
router.post('/login',async (req,res)=>{
    const user= await User.findOne({email:req.body.email})
    console.log(user)
    if(!user) return res.status(400).send('Email or password is wrong')
    const pass=await bcrypt.compare(req.body.password , user.password)
    if(!pass) return res.status(400).send('invaled password')

    const token =jwt.sign({id:user._id}, process.env.TOKEN_SECRET ,{
        expiresIn:"1h"
    } )
    //res.header('auth_token',token).send({auth_token:token})
    res.status(200).send({
        auth_token:token
    })
})



module.exports=router