import dotenv  from 'dotenv'
import mongoose from "mongoose";
dotenv.config();
const Db = process.env.MONGODB_URI??'';
let a : boolean = false;

 export const connect = async () => {
    mongoose.set('strictQuery',true);
    if(a){
        console.log('Already connected ');
        return;
    }
    try {
        await mongoose.connect(Db,{
            dbName: 'social-media',
            useNewUrlParser : true,
            useUnifiedTopology : true,
        }
    );
        console.log('Connectecd to db');
        a = true;
        
    } catch (error) {
        console.log('Not connected',error)
    }
 };