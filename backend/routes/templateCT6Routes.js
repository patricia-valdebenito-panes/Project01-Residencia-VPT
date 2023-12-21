import express from "express";
import {
  createTemplate_CT6,
  deleteTemplate_CT6,
  editTemplate_CT6,
  getTemplate_CT6,
  getTemplates_CT6,
} from "../controllers/templatesController/templateCT6Controller.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.route("/")
 .get(checkAuth, getTemplates_CT6)
 .post(checkAuth, createTemplate_CT6);

router.route("/:id")
  .get(checkAuth, getTemplate_CT6)
  .put(checkAuth, editTemplate_CT6)
  .delete(checkAuth, deleteTemplate_CT6);



export default router;
