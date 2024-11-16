import express from 'express';
import mongoose, { mongo } from 'mongoose';
import dotenv from 'dotenv';
import { log } from 'console';


dotenv.config()
mongoose.connect(process.env.MONGO).then(
    ()=>{
        console.log('Database is connected')
    }
).catch((err)=>{
    console.log(err);
})

const app = express();

app.use(express.json());
app.listen(3000,()=>{
    console.log('Server running on port 3000!');
    
})