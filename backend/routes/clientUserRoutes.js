import express from "express";
import {  perfil } from "../controllers/userController.js";
import {  fnund } from "../controllers/templatePerfilClient.js";

import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.get("/client",checkAuth, perfil);
router.get("/client/fnund",checkAuth, fnund);

export default router;