import express from "express";
import {
  createTemplate_CT5,
  deleteTemplate_CT5,
  editTemplate_CT5,
  getTemplate_CT5,
  getTemplates_CT5,
} from "../controllers/templateCT5Controller.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.route("/")
 .get(checkAuth, getTemplates_CT5)
 .post(checkAuth, createTemplate_CT5);

router.route("/:id")
  .get(checkAuth, getTemplate_CT5)
  .put(checkAuth, editTemplate_CT5)
  .delete(checkAuth, deleteTemplate_CT5);

export default router;
