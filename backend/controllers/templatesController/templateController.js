import TemplateModel from "../../models/templatesModel.js";
//

const searchTemplate = async (req, res) => {
  const { field, value } = req.body;
  const result = modelo.find().where(field).equals(value);
  console.log("result - templates search", result);
  try {
    res.json(result);
  } catch (err) {
    consolee.log(`Error : ${err}`);
  }
};

const getTemplate = async (req, res) => {
  const { id } = req.params;
  const template = await TemplateModel.findById(id);

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

const getTemplates = async (req, res) => {
  const templates = await TemplateModel.find();
  try {
    res.json(templates);
  } catch (err) {
    consolee.log(`Error : ${err}`);
  }
};

const createTemplate = async (req, res) => {
  // type, creatorUser, contributors
  const template = new TemplateModel(req.body);
  template.creator = req.user._id;

  template.type = req.body.type;
  template.client = req.body.client;

  //contributors[]
  console.log("req.body.contributors : ", req.body.contributors);
  console.log("req.user._id : ", req.user._id);

  if (req.body.contributors !== req.user._id) {
    template.contributors = req.body.contributors;
  }

  try {
     const templateSave = await template.save();
    // req.template = await TemplateModel.findById(template._id).select(
    //   " -createdAt -updatedAt -__v"
    // );

     res.json(templateSave);
  } catch (err) {
    console.log(`Error : ${err}`);
  }
  //next();
};

const editTemplate = async (req, res) => {
  const { id } = req.params;

  const template = await TemplateModel.findById(id);
  template.type = req.body.type;
  template.client = req.body.client;

  if (!template) {
    const err = new Error("No encontrado.");
    return res.status(404).json({ msg: err.message });
  }

  // if(template.creator.toString() !== req.user._id.toString()){
  //   const err = new Error('No Válido.');
  //   return res.status(404).json({msg:err.message})
  // }

  if (req.user.rol !== "SUPERADMIN") {
    const err = new Error("No Válido.");
    return res.status(403).json({ msg: err.message });
  }

  if (template.creator.toString() !== req.user._id.toString()) {
    let listContributors = [...new Set(template.contributors)];
    listContributors.map((e) => {
      if (e.toString() !== req.user._id.toString()) {
        template.contributors.push(req.user._id);
      }
    });
  }

  template.type = req.body.type || template.type;

  try {
    const editTemplate = await template.save();
    res.json(editTemplate);
  } catch (err) {
    console.log(`Error : ${err}`);
  }
};

export {
  createTemplate,
  // deleteSubSectionTemplate,
  // deleteTemplate,
  editTemplate,
  getTemplates,
  getTemplate,
  // getTypeTemplate,
  searchTemplate,
};
