import CT62 from "../models/TemplateModelCT62.js";
import TemplateModel from "../models/templatesModel.js";

const getTemplates_CT_6_2 = async (req, res) => {};

const createTemplate_CT_6_2 = async (req, res) => {
  // name, presion,pulse,temperature,FR,SAC,Obs
  console.log("req.body : ",req.body);

  
  // get id_template - with -  id creator
  // add id_template - to - id_template-ct6-2
  
  const template = new CT62(req.body);
  template.creator= req.user._id;


  try {

    // const CT_6_2_Save =  await template.save();
    // console.log("template CT_6_2 : ",template);
    // console.log("req.template  CT_6_2 : ",req.template);
    // res.json(CT_6_2_Save);

  } catch (err) {
    console.log(`Error : ${err}`);
  }
};

const getSubSectionTemplate_CT_6_2 = async (req, res) => {};
const getTemplate_CT_6_2 = async (req, res) => {};
const editTemplate_CT_6_2 = async (req, res) => {};
const deleteTemplate_CT_6_2 = async (req, res) => {};
const addSubSectionTemplate_CT_6_2 = async (req, res) => {};
const deleteSubSectionTemplate_CT_6_2 = async (req, res) => {};

export {
  createTemplate_CT_6_2,
  deleteSubSectionTemplate_CT_6_2,
  deleteTemplate_CT_6_2,
  editTemplate_CT_6_2,
  getSubSectionTemplate_CT_6_2,
  getTemplate_CT_6_2,
  getTemplates_CT_6_2,
  addSubSectionTemplate_CT_6_2,
};
