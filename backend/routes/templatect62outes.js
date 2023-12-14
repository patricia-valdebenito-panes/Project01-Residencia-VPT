import express from "express";
import {
  createTemplate_CT_6_2,
  // deleteSubSectionTemplate_CT6_2,
  deleteTemplate_CT_6_2,
  editTemplate_CT_6_2,
  // getSubSectionTemplate_CT6_2,
  getTemplate_CT_6_2,
  getTemplates_CT_6_2,
  // addSubSectionTemplate_CT6_2,
} from "../controllers/templatect26Controller.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.route("/")
.get(checkAuth, getTemplates_CT_6_2)
.post(checkAuth, createTemplate_CT_6_2);

router.route("/:id")
  .get(checkAuth, getTemplate_CT_6_2)
  .put(checkAuth, editTemplate_CT_6_2)
  .delete(checkAuth, deleteTemplate_CT_6_2);

// router.get("/subsection/:id",checkAuth,getSubSectionTemplate);
// router.post("/add-subsection/:id",checkAuth,addSubSectionTemplate);
// router.post("/delete-subsection/:id",checkAuth,deleteSubSectionTemplate);

export default router;
