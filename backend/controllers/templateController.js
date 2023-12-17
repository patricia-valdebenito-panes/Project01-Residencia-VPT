import TemplateModel from "../models/templatesModel.js";

const getTemplates = async (req, res) => {};

const createTemplate = async (req, res) => {
  // type, creatorUser, contributors
  console.log("req.body : ",req.body);
  const template = new TemplateModel(req.body);
  template.creator= req.user._id;
  template.idTemplate= req.idTemplate;
  // if (consulta) {  console.log(consulta) }
  console.log("template : ",template);
  try {
    // console.log("template : ",template);
    // const templateSave =  await template.save();
    // req.template   =  await TemplateModel.findById(template._id).select(" -createdAt -updatedAt -__v");
    // console.log("req.template : ",req.template);
    // res.json(templateSave);

  } catch (err) {
    console.log(`Error : ${err}`);
  }
};

const getSubSectionTemplate = async (req, res) => {};
const getTemplate = async (req, res) => {};
const editTemplate = async (req, res) => {};
const deleteTemplate = async (req, res) => {};
const addSubSectionTemplate = async (req, res) => {};
const deleteSubSectionTemplate = async (req, res) => {};

export {
  createTemplate,
  deleteSubSectionTemplate,
  deleteTemplate,
  editTemplate,
  getSubSectionTemplate,
  getTemplate,
  getTemplates,
  addSubSectionTemplate,
};
