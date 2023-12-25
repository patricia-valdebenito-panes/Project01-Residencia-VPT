import TemplateCT2 from "../../models/TemplateModelCT2.js";

const getTemplates_CT2 = async (req, res) => {
  const templates = await TemplateCT2.find();
  console.log("all - templates ct2", templates);
  try {
    res.json(templates);
  } catch (err) {
    consolee.log(`Error : ${err}`);
  }
};

const createTemplate_CT2 = async (req, res) => {
  console.log("template 2 req: ", req);
  const template = new TemplateCT2(req.body);
  template.creator = req.user._id;
  console.log("template 2 : ", template);
  try {
    const CT2_Save = await template.save();
    res.json(CT2_Save);
  } catch (err) {
    console.log(`Error : ${err}`);
  }
};

const getTemplate_CT2 = async (req, res) => {
  const { id } = req.params;
  const template = await TemplateCT2.findOne({ template: id })
  console.log("template +",template)
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

const editTemplate_CT2 = async (req, res) => {
  const { id } = req.params;

  const template = await TemplateCT2.findById(id);
  // console.log("edit - templates C6", template);

  if (!template) {
    const err = new Error("No encontrado.");
    return res.status(404).json({ msg: err.message });
  }

  if (template.creator.toString() !== req.user._id.toString()) {
    const err = new Error("No Válido.");
    return res.status(404).json({ msg: err.message });
  }
  // other user : aprobación / regla de negocio

  template.PC = req.body.PC || template.PC;
  template.Obs = req.body.Obs || template.Obs;

  try {
    const editTemplate = await template.save();
    res.json(editTemplate);
  } catch (err) {
    console.log(`Error : ${err}`);
  }
};

const deleteTemplate_CT2 = async (req, res) => {
  const { id } = req.params;

  const template = await TemplateCT2.findById(id);

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


export {
  createTemplate_CT2,
  getTemplate_CT2,
  getTemplates_CT2,
  deleteTemplate_CT2,
  editTemplate_CT2
};
