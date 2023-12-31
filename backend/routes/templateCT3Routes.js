import express from "express";
import {
  createTemplate_CT3,
  deleteTemplate_CT3,
  editTemplate_CT3,
  getTemplate_CT3,
  getTemplates_CT3,
} from "../controllers/templatesController/templateCT3Controller.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.route("/")
 .get(checkAuth, getTemplates_CT3)
 .post(checkAuth, createTemplate_CT3);


router.route("/:id")
  .get(checkAuth, getTemplate_CT3)
   .put(checkAuth, editTemplate_CT3)
   .delete(checkAuth, deleteTemplate_CT3);

export default router;
