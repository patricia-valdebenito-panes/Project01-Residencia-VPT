// dependencies
import express from 'express';
import dotenv from 'dotenv';
// setting
import ConectDB from './config/db.js';
import usersRoutes from './routes/userRoutes.js';
import clientUserRoutes from './routes/clientUserRoutes.js';
import templatesRoutes from './routes/templateRoutes.js';
import templatesCT62Routes from './routes/templatect62outes.js';


const app = express();
//procesar respuesta tipo json
app.use(express.json());
dotenv.config();

// db
ConectDB()

// routing
app.use("/api/users",usersRoutes);
app.use("/api/templates",templatesRoutes);
app.use("/api/client",clientUserRoutes);//ct1 : perfil
app.use("/api/templatesct62",templatesCT62Routes);//ct6-2 : signos-vitales

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{
    console.log(`servidor corriendo en puerto ${PORT}`)
})



