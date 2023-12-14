import express from "express";
import {
  createTemplate,
  deleteSubSectionTemplate,
  deleteTemplate,
  editTemplate,
  getSubSectionTemplate,
  getTemplate,
  getTemplates,
  addSubSectionTemplate,
} from "../controllers/templateController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.route("/")
.get(checkAuth, getTemplates)
.post(checkAuth, createTemplate);

router.route("/:id")
  .get(checkAuth, getTemplate)
  .put(checkAuth, editTemplate)
  .delete(checkAuth, deleteTemplate);

router.get("/subsection/:id",checkAuth,getSubSectionTemplate);
router.post("/add-subsection/:id",checkAuth,addSubSectionTemplate);
router.post("/delete-subsection/:id",checkAuth,deleteSubSectionTemplate);

export default router;
