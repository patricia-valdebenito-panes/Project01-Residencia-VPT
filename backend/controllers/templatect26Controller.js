import TemplateCT62 from "../models/TemplateModelCT62.js";


const createTemplate_CT_6_2 = async (req, res) => {
  // name, presion,pulse,temperature,FR,SAC,Obs
  const template = new TemplateCT62(req.body);
  template.creator= req.user._id;
  template.idTemplate = req.idTemplate;
  try {
    const CT_6_2_Save = await template.save();
    res.json(CT_6_2_Save);

  } catch (err) {
    console.log(`Error : ${err}`);
  }
};

const getSubSectionTemplate_CT_6_2 = async (req, res) => {};

const getTemplate_CT_6_2 = async (req, res) => {
  console.log("getClient : req.params",req.params);
  try {
    res.json(req.body);
  } catch (err) {
    console.log(`Error : ${err}`);
  }
};

const editTemplate_CT_6_2 = async (req, res) => {};
const deleteTemplate_CT_6_2 = async (req, res) => {};
const addSubSectionTemplate_CT_6_2 = async (req, res) => {};
const deleteSubSectionTemplate_CT_6_2 = async (req, res) => {};

export {
  createTemplate_CT_6_2,
  getTemplate_CT_6_2,
  deleteSubSectionTemplate_CT_6_2,
  deleteTemplate_CT_6_2,
  editTemplate_CT_6_2,
  getSubSectionTemplate_CT_6_2,
  addSubSectionTemplate_CT_6_2,
};
