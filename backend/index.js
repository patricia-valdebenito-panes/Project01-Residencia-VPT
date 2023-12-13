//

import express from 'express';
import dotenv from 'dotenv';
import ConectDB from './config/db.js';

const app = express();
dotenv.config();

ConectDB()
const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{
    console.log(`servidor corriendo en puerto ${PORT}`)
})



