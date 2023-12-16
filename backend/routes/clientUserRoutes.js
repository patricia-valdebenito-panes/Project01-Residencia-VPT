import express from "express";
import {  perfil } from "../controllers/userController.js";
import {  createNewClient } from "../controllers/templatePerfilClient.js";

import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.get("/",checkAuth, perfil);
router.post("/new-client",checkAuth, createNewClient);

export default router;