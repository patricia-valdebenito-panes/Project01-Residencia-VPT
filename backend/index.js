// dependencies
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
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


const app = express();
app.use(express.json());
dotenv.config();

// db
ConectDB();

//CORS
const listCORS = [process.env.URL_FRONT];
console.log("process.env.URL_FRONT",process.env.URL_FRONT)
const corsOpts =  {

    origin: function(origin,callback) {

     if(listCORS?.includes(origin)){
        callback(null, true);
     } else{
        callback(new Error('Contactar a administrador de aplicación.'));
     }

    }
}

app.use(cors(corsOpts)); // no corre desde postmant // host diferente

// routing
app.use("/api/users",usersRoutes);
app.use("/api/templates",templatesRoutes);
app.use("/api/client",clientUserRoutes);//ct1 : perfil

app.use("/api/templates/cambios-de-posicion",templatesCT2Routes);
app.use("/api/templates/curaciones",templatesCT3Routes);
app.use("/api/templates/vacunas",templatesCT4Routes);
app.use("/api/templates/visita-medica",templatesCT5Routes);
app.use("/api/templates/signos-vitales",templatesCT6Routes);
app.use("/api/templates/otros",templatesCT6Routes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{
    console.log(`servidor corriendo en puerto ${PORT}`)
})



