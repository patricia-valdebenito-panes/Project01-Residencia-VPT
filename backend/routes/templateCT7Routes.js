import express from "express";
import {
  createTemplate_CT7,
  deleteTemplate_CT7,
  editTemplate_CT7,
  getTemplate_CT7,
  getTemplates_CT7,
} from "../controllers/templatesController/templateCT7Controller.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.route("/")
 .get(checkAuth, getTemplates_CT7)
 .post(checkAuth, createTemplate_CT7);

router.route("/:id")
  .get(checkAuth, getTemplate_CT7)
  .put(checkAuth, editTemplate_CT7)
  .delete(checkAuth, deleteTemplate_CT7);

export default router;
