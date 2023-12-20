import express from "express";
import {
  createTemplate_CT4,
  // deleteSubSectionTemplate_CT4,
  deleteTemplate_CT4,
  editTemplate_CT4,
  // getSubSectionTemplate_CT4,
  getTemplate_CT4,
  getTemplates_CT4,
  // addSubSectionTemplate_CT4,
} from "../controllers/templatesController/templateCT4Controller.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.route("/")
 .get(checkAuth, getTemplates_CT4)
 .post(checkAuth, createTemplate_CT4);

router.route("/:id")
  .get(checkAuth, getTemplate_CT4)
  .put(checkAuth, editTemplate_CT4)
  .delete(checkAuth, deleteTemplate_CT4);

export default router;
