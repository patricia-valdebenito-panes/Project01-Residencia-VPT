// dependencies
import express from 'express';
import dotenv from 'dotenv';
// setting
import ConectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
dotenv.config();

// db
ConectDB()

// routing
app.use("/api/users",userRoutes);


const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{
    console.log(`servidor corriendo en puerto ${PORT}`)
})



