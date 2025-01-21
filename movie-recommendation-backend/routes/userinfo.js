const express = require('express');

const router = express.Router();
const User = require('../models/users')
const jwt =require('jsonwebtoken')
const bcrypt = require('bcryptjs');

router.use(express.json());

router.post('/',async function(req,res){
    const user =await User.findOne({_id: req.body._id})
    res.status(201).json({user});
    if(!user){
        res.status(400)
    }
})
module.exports =router;