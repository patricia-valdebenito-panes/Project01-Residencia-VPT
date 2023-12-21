import TemplateCT3 from "../../models/TemplateModelCT3.js";

const getTemplates_CT3 = async (req, res) => {
  const templates = await TemplateCT3.find();
  console.log("all - templates ct3",templates);
  try{
    res.json(templates);
  }
  catch(err){
    consolee.log(`Error : ${err}`)
  }
};
const createTemplate_CT3 = async (req, res) => {
  // name, presion,pulse,temperature,FR,SAC,Obs
  const template = new TemplateCT3(req.body);
  template.creator= req.user._id;
  // template.idTemplate = req.idTemplate;
  try {
    const CT2_Save = await template.save();
    res.json(CT2_Save);

  } catch (err) {
    console.log(`Error : ${err}`);
  }
};

const getSubSectionTemplate_CT3 = async (req, res) => {};

const getTemplate_CT3 = async (req, res) => {
  const { id } = req.params;
  const template = await TemplateCT3.findById(id).populate("template");

  console.log("TemplateModel : ", template);

  if (!template) {
    const err = new Error("No encontrado.");
    return res.status(404).json({ msg: err.message });
  }

  try {
    res.json(template);
  } catch (err) {
    console.log(`Error : ${err}`);
  }
};

const editTemplate_CT3 = async (req, res) => {
  const { id } = req.params;

  const template = await TemplateCT3.findById(id);
  console.log("edit - templates C3", template);

  if(!template){
    const err = new Error('No encontrado.');
    return res.status(404).json({msg:err.message})
  }

  if(template.creator.toString() !== req.user._id.toString()){
    const err = new Error('No Válido.');
    return res.status(404).json({msg:err.message})
  }
  // other user : aprobación / regla de negocio
 
  template.typeCure = req.body.typeCure || template.typeCure;// Tipo de curación
  template.zone = req.body.zone || template.zone;// Zona
  template.UlcerOrigin = req.body.UlcerOrigin || template.UlcerOrigin;// Origen de úlcera
  template.valorationAndEvolution = req.body.valorationAndEvolution || template.valorationAndEvolution;// Valoración y evolución
  template.frecuencyCure = req.body.frecuencyCure || template.frecuencyCure; // Próx. Fecha de curación
  template.cureNext = req.body.cureNext || template.cureNext;// Frecuencia de curaciones
  template.responsibleForTheCure = req.body.responsibleForTheCure || template.responsibleForTheCure;// Responsable
  template.Obs = req.body.Obs || template.Obs;// Observación

  try {
    const editTemplate =  await template.save();
    res.json(editTemplate);
  } catch (err) {
    console.log(`Error : ${err}`);
  }

};

const deleteTemplate_CT3 = async (req, res) => {
  const { id } = req.params;

  const template = await TemplateCT3.findById(id);

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

const addSubSectionTemplate_CT3 = async (req, res) => {};
const deleteSubSectionTemplate_CT3 = async (req, res) => {};

export {
  createTemplate_CT3,
  getTemplate_CT3,
  getTemplates_CT3,
  deleteSubSectionTemplate_CT3,
  deleteTemplate_CT3,
  editTemplate_CT3,
  getSubSectionTemplate_CT3,
  addSubSectionTemplate_CT3,
};
