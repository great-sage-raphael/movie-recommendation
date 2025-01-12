const express = require('express');
const router = express.Router();
const User = require('../models/users')
const jwt =require('jsonwebtoken')
const bcrypt = require('bcryptjs');
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
        if(!user||!(await bcrypt.compare(req.body.password,user.password))){
            throw new error("Invalid credentials");
        }
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET_KEY);
        res.status(201).json({user,token});

     }
    catch(err){
        res.status(400).json({error:err.message})
     }
});

module.exports = router;