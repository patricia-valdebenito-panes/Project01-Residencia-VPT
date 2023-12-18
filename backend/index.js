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

app.use("/api/templatesCT2",templatesCT2Routes);//ct2: signos-vitales
app.use("/api/templatesCT3",templatesCT3Routes);//ct3: curaciones
app.use("/api/templatesCT4",templatesCT4Routes);//ct4: vacunas
app.use("/api/templatesCT7",templatesCT5Routes);//ct5: health care record
app.use("/api/templatesCT6",templatesCT6Routes);//ct6: signos-vitales
app.use("/api/templatesCT7",templatesCT7Routes);//ct7: Diuresis y deposiciones



const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{
    console.log(`servidor corriendo en puerto ${PORT}`)
})



