// getting-started.js
import mongoose from 'mongoose';
// env

async function ConectDB() {
    try{
        const connection =  await mongoose.connect(process.env.MONGODB_URL);
        const urlMessage = `host : ${connection.connection.host} // port :${connection.connection.port}`;
        console.log(`mongoDB //  ${urlMessage}`)
        
    }
    catch(err){
        console.log(`Error : ${err.message}`);
        process.exit(1);
    }
    
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}




export default ConectDB;