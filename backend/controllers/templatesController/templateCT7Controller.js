import TemplateCT7 from "../../models/TemplateModelCT7.js";

const getTemplates_CT7 = async (req, res) => {
  const templates = await TemplateCT7.find();
  console.log("all - templates ct7",templates);
  try{
    res.json(templates);
  }
  catch(err){
    consolee.log(`Error : ${err}`)
  }
};
const createTemplate_CT7 = async (req, res) => {
  // name, presion,pulse,temperature,FR,SAC,Obs
  const template = new TemplateCT7(req.body);
  template.creator= req.user._id;
  // template.idTemplate = req.idTemplate;
  try {
    const CT7_Save = await template.save();
    res.json(CT7_Save);

  } catch (err) {
    console.log(`Error : ${err}`);
  }
};

const getSubSectionTemplate_CT7 = async (req, res) => {};

const getTemplate_CT7 = async (req, res) => {
  console.log("getClient : req.params",req.params);
  try {
    res.json(req.body);
  } catch (err) {
    console.log(`Error : ${err}`);
  }
};

const editTemplate_CT7 = async (req, res) => {
  const { id } = req.params;

  const template = await TemplateCT7.findById(id);
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

  template.PC = req.body.PC || template.PC;
  template.clasification = req.body.clasification || template.clasification;

  template.Obs = req.body.Obs || template.Obs;

  try {
    const editTemplate =  await template.save();
    res.json(editTemplate);
  } catch (err) {
    console.log(`Error : ${err}`);
  }

};

const deleteTemplate_CT7 = async (req, res) => {
  const { id } = req.params;

  const template = await TemplateCT7.findById(id);

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

const addSubSectionTemplate_CT7 = async (req, res) => {};
const deleteSubSectionTemplate_CT7 = async (req, res) => {};

export {
  createTemplate_CT7,
  getTemplate_CT7,
  getTemplates_CT7,
  deleteSubSectionTemplate_CT7,
  deleteTemplate_CT7,
  editTemplate_CT7,
  getSubSectionTemplate_CT7,
  addSubSectionTemplate_CT7,
};
