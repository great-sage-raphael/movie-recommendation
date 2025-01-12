const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const dotenv=require('dotenv');
const authRoutes=require('../routes/auth');
const movieRoutes=require('../routes/movies');

dotenv.config();

const app=express();
const port=process.env.PORT ||3000;
app.get('/test', (req, res) => res.json({message:'Test route works!'}));
//middleware
app.use(cors());
app.use(express());
//routes
app.use('/api/auth',authRoutes);
app.use('/api/movies',movieRoutes);

mongoose.connect(process.env.MONGO_url)
.then(()=>{console.log("conection established")})
.catch((err)=>{console.error("error :",err)})

app.listen(port,()=>{
    console.log(`server listening in on port ${port}`)
});