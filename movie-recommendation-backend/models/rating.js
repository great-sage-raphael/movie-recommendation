const mongoose=require('mongoose');

const ratingschema=new mongoose.Schema({
    movieId:{type:String,required:true},
    rating:{type:Number,required:true,min:1,max:5},
    user:{type:mongoose.Schema.ObjectId,ref:'user',required:true}
});
module.exports=mongoose.model('rating',ratingschema);