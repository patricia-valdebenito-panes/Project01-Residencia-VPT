import TemplateCT4 from "../../models/TemplateModelCT4.js";

const getTemplates_CT4 = async (req, res) => {
  const templates = await TemplateCT4.find();
  console.log("all - templates ct4", templates);
  try {
    res.json(templates);
  } catch (err) {
    consolee.log(`Error : ${err}`);
  }
};
const createTemplate_CT4 = async (req, res) => {
  // name, presion,pulse,temperature,FR,SAC,Obs
  const template = new TemplateCT4(req.body);
  template.creator = req.user._id;
  // template.idTemplate = req.idTemplate;
  try {
    const CT4_Save = await template.save();
    res.json(CT4_Save);
  } catch (err) {
    console.log(`Error : ${err}`);
  }
};

const getTemplate_CT4 = async (req, res) => {
  const { id } = req.params;
  const template = await TemplateCT4.findOne({ template: req.params.id });
  console.log("template ct3 +",template)
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
const getSubSectionTemplate_CT4 = async (req, res) => {};

const editTemplate_CT4 = async (req, res) => {
  const { id } = req.params;

  const template = await TemplateCT4.findById(id);
  console.log("edit - templates C4", template);

  if (!template) {
    const err = new Error("No encontrado.");
    return res.status(404).json({ msg: err.message });
  }

  if (template.creator.toString() !== req.user._id.toString()) {
    const err = new Error("No Válido.");
    return res.status(404).json({ msg: err.message });
  }
  // other user : aprobación / regla de negocio

  template.name = req.body.name || template.name; // name
  template.applyNext = req.body.applyNext || template.applyNext; // applyNext
  template.Obs = req.body.Obs || template.Obs; // Observación

  try {
    const editTemplate = await template.save();
    res.json(editTemplate);
  } catch (err) {
    console.log(`Error : ${err}`);
  }
};

const deleteTemplate_CT4 = async (req, res) => {
  const { id } = req.params;

  const template = await TemplateCT4.findById(id);

  if (!template) {
    const err = new Error("No encontrado.");
    return res.status(404).json({ msg: err.message });
  }

  // if(template.creator.toString() !== req.user._id.toString()){
  //   const err = new Error('No Válido.');
  //   return res.status(404).json({msg:err.message});
  // }

  // other user : aprobación / regla de negocio
  if (req.user.rol.toString() !== "SUPERADMIN") {
    const err = new Error("No Válido.");
    return res.status(404).json({ msg: err.message });
  }

  try {
    await template.deleteOne();
    res.json({ msg: "Registro Eliminado." });
  } catch (err) {
    console.log(`Error : ${err}`);
  }
};

const addSubSectionTemplate_CT4 = async (req, res) => {};
const deleteSubSectionTemplate_CT4 = async (req, res) => {};

export {
  createTemplate_CT4,
  getTemplate_CT4,
  getTemplates_CT4,
  deleteSubSectionTemplate_CT4,
  deleteTemplate_CT4,
  editTemplate_CT4,
  getSubSectionTemplate_CT4,
  addSubSectionTemplate_CT4,
};
