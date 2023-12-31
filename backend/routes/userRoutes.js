import express from "express";
import { 
    changePassword,
    confirmationUserToken, 
    getAllUsers, 
    loginUser, 
    perfil, 
    registerUser, 
    resetAccountPassword, 
    validationToken, 
    } from "../controllers/userController.js";

import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

// auth - login
router.post("/login",loginUser);

// register
router.post("/",registerUser);

// confirm account
router.get("/confirm/:token",confirmationUserToken);

// reset account - password
router.post("/new-password",resetAccountPassword);

router.route("/new-password/:token")
.get(validationToken)
.post(changePassword);

// perfil
router.get("/perfil",checkAuth,perfil);

// lista de usuarios
router.get("/list-users",checkAuth,getAllUsers);

export default router;