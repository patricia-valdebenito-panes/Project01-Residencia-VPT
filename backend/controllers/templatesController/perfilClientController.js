// import generateId from "../helpers/generateId.js";
// import generateJWT from "../helpers/generateJWT.js";
// import UserModel from "../models/UserModels.js"

import TemplateClientUserModel from "../../models/TemplateClientUser.js";
import TemplateModel from "../../models/templatesModel.js";

// register new resident/tutor
const createNewClient = async (req,res) => {
  const template = new TemplateClientUserModel(req.body);
  template.creator= req.user._id; 
  try {
    await template.save();
    //req.template   =  await TemplateModel.findById(template._id).select(" -createdAt -updatedAt -__v");
    res.json(req.body);

  } catch (err) {
    console.log(`Error : ${err}`);
  }
}

const getClient = async (req,res) => {
  const { id } = req.params;
  const client = await TemplateClientUserModel.findById(id);

  if(!client){
   return res.status(404).json({msg:'Cliente No Encontrado'}); 
  }
  // const templates = await TemplateModel.find().where("client").equals(id);

  try {
    res.json(client);
    // res.json({client, templates});
  } catch (err) {
    console.log(`Error : ${err}`);
  }
}

const getTemplatesClient = async (req, res) => {
  const { id } = req.params;
  const clients = await TemplateClientUserModel.find();

  if(!client){
   return res.status(404).json({msg:'Cliente No Encontrado'}); 
  }

  try{
    res.json(clients);
  }
  catch(err){
    consolee.log(`Error : ${err}`)
  }
};

const getTemplatesCTClient = async (req,res) =>{
  const { id } = req.params;
  const client = await TemplateClientUserModel.findById(id);

  if(!client){
   return res.status(404).json({msg:'Cliente No Encontrado'}); 
  }

  const templates = await TemplateModel.find().where("client").equals(id);

  try{
    res.json(templates);
  }
  catch(err){
    consolee.log(`Error : ${err}`)
  }
}
export { 
    createNewClient,
    getClient,
    getTemplatesClient,
    getTemplatesCTClient
}



// auth
// register
// confirm account
// reset account
// validation token
// change password