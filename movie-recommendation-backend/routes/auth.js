const express = require('express');

const router = express.Router();
const User = require('../models/users')
const jwt =require('jsonwebtoken')
const bcrypt = require('bcryptjs');

router.use(express.json());

router.post('/register', async(req, res) => {
  try{
        const user=new User(req.body)
        await user.save()
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET_KEY);
        res.status(201).json({user,token});
    }
  catch(err){
        res.status(400).json({error: err.message});
    }
});

router.post('/login',async(req,res)=>{
    try{
        const user=await User.findOne({username: req.body.username})
        if (user) {
            console.log('User exists:', user);
            console.log(user.password)
            console.log(req.body)
        } else {
            console.log('User does not exist');
        }
        if(!user||!(await bcrypt.compare(req.body.password,user.password))){
            console.log("invalid");
            throw new Error("Invalid credentials");
            
        }
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET_KEY);
        res.status(201).json({user,token});

     }
    catch(err){
        res.status(400).json({error:err.message})
     }
});

module.exports = router;