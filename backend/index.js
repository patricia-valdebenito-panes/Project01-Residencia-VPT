// dependencies
import express from 'express';
import dotenv from 'dotenv';
// setting
import ConectDB from './config/db.js';
import usersRoutes from './routes/userRoutes.js';
import clientUserRoutes from './routes/clientUserRoutes.js';

import templatesRoutes from './routes/templateRoutes.js';

import templatesCT2Routes from './routes/templateCT2Routes.js';
import templatesCT3Routes from './routes/templateCT3Routes.js';
import templatesCT4Routes from './routes/templateCT4Routes.js';
import templatesCT5Routes from './routes/templateCT5Routes.js';
import templatesCT6Routes from './routes/templateCT6Routes.js';
import templatesCT7Routes from './routes/templateCT7Routes.js';


const app = express();
app.use(express.json());
dotenv.config();

// db
ConectDB()

// routing
app.use("/api/users",usersRoutes);
app.use("/api/templates",templatesRoutes);
app.use("/api/client",clientUserRoutes);//ct1 : perfil
app.use("/cambio-de-posicion",templatesCT2Routes);
app.use("curaciones",templatesCT3Routes);
app.use("/vacunas",templatesCT4Routes);
app.use("/visita-medica",templatesCT5Routes);
app.use("/signos-vitales",templatesCT6Routes);
app.use("/otros",templatesCT6Routes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{
    console.log(`servidor corriendo en puerto ${PORT}`)
})



