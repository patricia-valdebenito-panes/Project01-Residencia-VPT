import TemplateCT5 from "../models/TemplateModelCT5.js";

const getTemplates_CT5 = async (req, res) => {
  const templates = await TemplateCT5.find();
  console.log("all - templates ct5",templates);
  try{
    res.json(templates);
  }
  catch(err){
    consolee.log(`Error : ${err}`)
  }
};
const createTemplate_CT5 = async (req, res) => {
  // name, presion,pulse,temperature,FR,SAC,Obs
  const template = new TemplateCT5(req.body);
  template.creator= req.user._id;
  // template.idTemplate = req.idTemplate;
  try {
    const CT5_Save = await template.save();
    res.json(CT5_Save);

  } catch (err) {
    console.log(`Error : ${err}`);
  }
};

const getSubSectionTemplate_CT5 = async (req, res) => {};

const getTemplate_CT5 = async (req, res) => {
  console.log("getClient : req.params",req.params);
  try {
    res.json(req.body);
  } catch (err) {
    console.log(`Error : ${err}`);
  }
};

const editTemplate_CT5 = async (req, res) => {
  const { id } = req.params;

  const template = await TemplateCT5.findById(id);
  console.log("edit - templates C4", template);

  if(!template){
    const err = new Error('No encontrado.');
    return res.status(404).json({msg:err.message})
  }

  if(template.creator.toString() !== req.user._id.toString()){
    const err = new Error('No Válido.');
    return res.status(404).json({msg:err.message})
  }
  // other user : aprobación / regla de negocio
  
  template.presion = req.body.presion || template.presion;// presion
  template.pulse = req.body.pulse || template.pulse;// pulse
  template.temperature = req.body.temperature || template.temperature;// temperature
  template.FR = req.body.FR || template.FR;// FR
  template.SAC = req.body.SAC || template.SAC;// SAC

  template.motive = req.body.motive || template.motive;// motive

  template.PE = req.body.PE || template.PE;// PE

  template.indications = req.body.indications || template.indications;// indications

  template.doctorName = req.body.doctorName || template.doctorName;// doctorName
  template.doctorClasificacion = req.body.doctorClasificacion || template.doctorClasificacion;// doctorClasificacion
  template.doctorRut = req.body.doctorRut || template.doctorRut;// doctorRut
  
  template.cureNext = req.body.cureNext || template.cureNext;// cureNext
  
  template.Obs = req.body.Obs || template.Obs;// Observación

  try {
    const editTemplate =  await template.save();
    res.json(editTemplate);
  } catch (err) {
    console.log(`Error : ${err}`);
  }

};

const deleteTemplate_CT5 = async (req, res) => {
  const { id } = req.params;

  const template = await TemplateCT5.findById(id);

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

const addSubSectionTemplate_CT5 = async (req, res) => {};
const deleteSubSectionTemplate_CT5 = async (req, res) => {};

export {
  createTemplate_CT5,
  getTemplate_CT5,
  getTemplates_CT5,
  deleteSubSectionTemplate_CT5,
  deleteTemplate_CT5,
  editTemplate_CT5,
  getSubSectionTemplate_CT5,
  addSubSectionTemplate_CT5,
};
