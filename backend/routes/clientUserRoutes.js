import express from "express";
import {  perfil } from "../controllers/userController.js";
import {  fnund } from "../controllers/templatePerfilClient.js";

import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.get("/",checkAuth, perfil);
router.get("/fnund",checkAuth, fnund);

export default router;