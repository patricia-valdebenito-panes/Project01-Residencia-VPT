import express from "express";
import {
  createTemplate,
  // deleteTemplate,
  editTemplate,
  getTemplate,
  getTemplates
} from "../controllers/templatesController/templateController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

const routerTemplate = async (req, res) => {
  const { template } = req;
  const { _id } = template;
  res.redirect(`/api/templates/${_id.toString()}`);
};

router.route("/")
.get(checkAuth, getTemplates)
.post(checkAuth, createTemplate, routerTemplate);

router.route("/:id")
  .get(checkAuth, getTemplate)
  .put(checkAuth, editTemplate)
  // .delete(checkAuth, deleteTemplate);

// // lista de templates
router.get("/list-templates",checkAuth,getTemplates);

export default router;
