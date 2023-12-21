import express from "express";
import {
  createTemplate_CT2,
  deleteTemplate_CT2,
  editTemplate_CT2,
  getTemplate_CT2,
  getTemplates_CT2,
} from "../controllers/templatesController/templateCT2Controller.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.route("/")
 .get(checkAuth, getTemplates_CT2) //LISTA
 .post(checkAuth, createTemplate_CT2);

router.route("/:id")
  .get(checkAuth, getTemplate_CT2)
  .put(checkAuth, editTemplate_CT2)
  .delete(checkAuth, deleteTemplate_CT2);

export default router;
