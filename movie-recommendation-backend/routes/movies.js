const express = require('express');
const router = express.Router();
const Rating= require('../models/rating');
const axios=require('axios');
// normal search
router.post('/', async(req, res) => {
 try{
        const {search}=req.query;
        const response=await axios.get(`https://omdbapi.com/?s=${search}&apikey=${process.env.OMBD_API_KEY}`);
        if(response.data.Responds ==='True'){
            res.json(response.data.search);
        }
        else{
            res.status(404).json({error:'no movies found'});
        }
    }
 catch(err){
        res.status(500).json({error: err.message});
    }
});

//movie rating add/update
router.post('/rate',async(req,res)=>{
    try{
        const {movieId,rating,Userid}=req.body;
        const existingrating= await Rating.findOne({movieId,user:Userid});
        if(existingrating){
            existingrating=rating;
            await existingrating.save();
        }
        else{
            const newrating= new Rating({movieId:movieId,rating:rating,user:Userid});
            await newrating.save();

        }
        res.status(201).json('rating saved');
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
}); 

//search by id
router.post('/:id', async(req, res) => {
    try{
           const response=await axios.get(`https://omdbapi.com/?s=${req.params.id}&apikey=${process.env.OMBD_API_KEY}`);
           if(response.data.Responds ==='True'){
               res.json(response.data);
           }
           else{
               res.status(404).json({error:'no movies found'});
           }
       }
    catch(err){
           res.status(500).json({error: err.message});
       }
   });

module.exports = router;