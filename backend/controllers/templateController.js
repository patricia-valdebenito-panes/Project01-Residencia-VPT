import TemplateModel from "../models/templatesModel.js";
// 
const getTemplate = async (req, res) => {};

const searchTemplate = async (req, res) => {
  const {field,value} = req.body;
  const result = modelo.find().where(field).equals(value);
  console.log("result - templates search", result);
  try {
    res.json(result);
  } catch (err) {
    consolee.log(`Error : ${err}`);
  }
};

const getTemplates = async (req, res) => {
  const templates = await TemplateModel.find();
  console.log("all - templates main", templates);
  try {
    res.json(templates);
  } catch (err) {
    consolee.log(`Error : ${err}`);
  }
};

const createTemplate = async (req, res) => {
  // type, creatorUser, contributors
  console.log("req.body : ", req.body);
  const template = new TemplateModel(req.body);
  template.creator = req.user._id;
  template.idTemplate = req.idTemplate;
  console.log("template : ", template);
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



const editTemplate = async (req, res) => {
  const { id } = req.params;

  const template = await TemplateModel.findById(id);
  console.log("edit - templates CLIENT", template);

  if(!template){
    const err = new Error('No encontrado.');
    return res.status(404).json({msg:err.message})
  }

  if(template.creator.toString() !== req.user._id.toString()){
    const err = new Error('No Válido.');
    return res.status(404).json({msg:err.message})
  }

  template.idTemplate = template._id;
  template.type = req.body.type || template.type;

  try {
    const editTemplate =  await template.save();
    res.json(editTemplate);
  } catch (err) {
    console.log(`Error : ${err}`);
  }
};

const getSubSectionTemplate = async (req, res) => {};
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
  searchTemplate
};
