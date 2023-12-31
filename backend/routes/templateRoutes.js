import express from "express";
import {
  createTemplate,
  deleteTemplate,
  // deleteTemplate,
  editTemplate,
  getTemplate,
  getTemplates,
} from "../controllers/templatesController/templateController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.route("/").get(checkAuth, getTemplates).post(checkAuth, createTemplate);

router.route("/:id")
.get(checkAuth, getTemplate)
.put(checkAuth, editTemplate)
.delete(checkAuth, deleteTemplate);

// // lista de templates
router.get("/list-templates", checkAuth, getTemplates);

export default router;
