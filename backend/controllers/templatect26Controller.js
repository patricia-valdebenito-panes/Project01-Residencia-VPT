import TemplateCT62 from "../models/TemplateModelCT62.js";

const getTemplates_CT_6_2 = async (req, res) => {
  const templates = await TemplateCT62.find();
  console.log("all - templates ct62",templates);
  try{
    res.json(templates);
  }
  catch(err){
    consolee.log(`Error : ${err}`)
  }
};
const createTemplate_CT_6_2 = async (req, res) => {
  // name, presion,pulse,temperature,FR,SAC,Obs
  const template = new TemplateCT62(req.body);
  template.creator= req.user._id;
  // template.idTemplate = req.idTemplate;
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

const editTemplate_CT_6_2 = async (req, res) => {
  const { id } = req.params;

  const template = await TemplateCT62.findById(id);
  console.log("edit - templates C62", template);

  if(!template){
    const err = new Error('No encontrado.');
    return res.status(404).json({msg:err.message})
  }

  if(template.creator.toString() !== req.user._id.toString()){
    const err = new Error('No Válido.');
    return res.status(404).json({msg:err.message})
  }
  // other user : aprobación / regla de negocio

  template.presion = req.body.presion || template.presion;
  template.pulse = req.body.type || template.pulse;
  template.temperature = req.body.temperature || template.temperature;
  template.FR = req.body.tFRype || template.FR;
  template.SAC = req.body.tSACype || template.SAC;
  template.Obs = req.body.Obs || template.Obs;

  try {
    const editTemplate =  await template.save();
    res.json(editTemplate);
  } catch (err) {
    console.log(`Error : ${err}`);
  }

};

const deleteTemplate_CT_6_2 = async (req, res) => {
  const { id } = req.params;

  const template = await TemplateCT62.findById(id);


  if(!template){
    const err = new Error('No encontrado.');
    return res.status(404).json({msg:err.message})
  }

  // if(template.creator.toString() !== req.user._id.toString()){
  //   const err = new Error('No Válido.');
  //   return res.status(404).json({msg:err.message});
  // }

  // other user : aprobación / regla de negocio
  if(req.user.rol.toString() !== 'SUPERADMIN'){
    const err = new Error('No Válido.');
    return res.status(404).json({msg:err.message});
  }

  try {
    await template.deleteOne();
    res.json({msg:'Registro Eliminado.'});
  } catch (err) {
    console.log(`Error : ${err}`);
  };
}
const addSubSectionTemplate_CT_6_2 = async (req, res) => {};
const deleteSubSectionTemplate_CT_6_2 = async (req, res) => {};

export {
  createTemplate_CT_6_2,
  getTemplate_CT_6_2,
  getTemplates_CT_6_2,
  deleteSubSectionTemplate_CT_6_2,
  deleteTemplate_CT_6_2,
  editTemplate_CT_6_2,
  getSubSectionTemplate_CT_6_2,
  addSubSectionTemplate_CT_6_2,
};
