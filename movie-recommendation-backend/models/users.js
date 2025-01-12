const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')

const userschema= new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true},
});

userschema.pre('save',async(next)=>{
    if(this.isModified('password')){
        this.password=bcrypt.hash(this.password,8);
    }
next();
});
module.exports=mongoose.model('user',userschema);