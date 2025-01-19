const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')

const userschema= new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    email:{type:String,required:true}
});

userschema.pre('save',async function(next){
    if (this.isModified('password')) {
        try {
            this.password = await bcrypt.hash(this.password, 8); 
          //  console.log("Hashed Password:", this.password); 
        } catch (err) {
           // console.error("Error hashing password:", err);
            return next(err); 
        }
    }
next();
});
module.exports=mongoose.model('user',userschema);