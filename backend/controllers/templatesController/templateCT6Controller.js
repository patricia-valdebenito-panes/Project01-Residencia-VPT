import TemplateCT6 from "../../models/TemplateModelCT6.js";

const getTemplates_CT6 = async (req, res) => {
  const templates = await TemplateCT6.find();
  console.log("all - templates ct6",templates);
  try{
    res.json(templates);
  }
  catch(err){
    consolee.log(`Error : ${err}`)
  }
};
const createTemplate_CT6 = async (req, res) => {
  // name, presion,pulse,temperature,FR,SAC,Obs
  const template = new TemplateCT6(req.body);
  template.creator= req.user._id;
  // template.idTemplate = req.idTemplate;
  try {
    const CT6_Save = await template.save();
    res.json(CT6_Save);

  } catch (err) {
    console.log(`Error : ${err}`);
  }
};

const getSubSectionTemplate_CT6 = async (req, res) => {};

const getTemplate_CT6 = async (req, res) => {
  console.log("getClient : req.params",req.params);
  try {
    res.json(req.body);
  } catch (err) {
    console.log(`Error : ${err}`);
  }
};

const editTemplate_CT6 = async (req, res) => {
  const { id } = req.params;

  const template = await TemplateCT6.findById(id);
  console.log("edit - templates C6", template);

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

const deleteTemplate_CT6 = async (req, res) => {
  const { id } = req.params;

  const template = await TemplateCT6.findById(id);

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

const addSubSectionTemplate_CT6 = async (req, res) => {};
const deleteSubSectionTemplate_CT6 = async (req, res) => {};

export {
  createTemplate_CT6,
  getTemplate_CT6,
  getTemplates_CT6,
  deleteSubSectionTemplate_CT6,
  deleteTemplate_CT6,
  editTemplate_CT6,
  getSubSectionTemplate_CT6,
  addSubSectionTemplate_CT6,
};
