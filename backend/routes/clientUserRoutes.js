import express from "express";
import {  perfil } from "../controllers/userController.js";
import {  
    createNewClient, 
    getClient, 
    getTemplatesCTClient, 
    getTemplatesClient } from "../controllers/templatesController/perfilClientController.js";

import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.get("/",checkAuth, perfil);
router.get("/list-client",checkAuth, getTemplatesClient);
router.get("/:id",checkAuth, getClient);
router.put("/:id",checkAuth, getClient);
router.get("/planillas/:id",checkAuth, getTemplatesCTClient);

router.post("/new-client",checkAuth, createNewClient);

export default router;