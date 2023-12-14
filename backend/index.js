// dependencies
import express from 'express';
import dotenv from 'dotenv';
// setting
import ConectDB from './config/db.js';
import usersRoutes from './routes/userRoutes.js';

const app = express();
//procesar respuesta tipo json
app.use(express.json());
dotenv.config();

// db
ConectDB()

// routing
app.use("/api/users",usersRoutes);

console.log(process.env.PORT)

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{
    console.log(`servidor corriendo en puerto ${PORT}`)
})



