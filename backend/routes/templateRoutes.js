import express from "express";
import {
  createTemplate,
  // deleteTemplate,
  editTemplate,
  getTemplate,
  getTemplates
} from "../controllers/templatesController/templateController.js";
import checkAuth from "../middleware/checkAuth.js";
import { createTemplate_CT2, getTemplates_CT2 } from "../controllers/templatesController/templateCT2Controller.js";

const router = express.Router();

// const routerTemplate = async (req, res) => {
//   const { template } = req;
//   const { _id } = template;
//   res.redirect(`/api/templates/${_id.toString()}`);
// };

router.route("/")
.get(checkAuth, getTemplates)
.post(checkAuth, createTemplate);

router.route("/cambios-de-posicion")
.get(checkAuth,  getTemplates_CT2)
.post(checkAuth, createTemplate_CT2);

router.route("/:id")
  .get(checkAuth, getTemplate)
  .put(checkAuth, editTemplate)
  // .delete(checkAuth, deleteTemplate);

// // lista de templates
router.get("/list-templates",checkAuth,getTemplates);

export default router;
