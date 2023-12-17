import express from "express";
import {  perfil } from "../controllers/userController.js";
import {  createNewClient, getClient } from "../controllers/perfilClientController.js";

import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.get("/",checkAuth, perfil);
router.get("/:id",checkAuth, getClient);
router.post("/new-client",checkAuth, createNewClient);

export default router;