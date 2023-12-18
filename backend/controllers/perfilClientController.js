// import generateId from "../helpers/generateId.js";
// import generateJWT from "../helpers/generateJWT.js";
// import UserModel from "../models/UserModels.js"

import TemplateClientUserModel from "../models/TemplateClientUser.js";

// auth ok
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
  console.log("getClient : req",req);
  console.log("getClient : req.params",req.params);
  const { id } = req.params;
  const client = await TemplateClientUserModel.findById(id);

  if(!client){
   return res.status(404).json({msg:'Cliente No Encontrado'}); 
  }

  try {
    res.json(client);
  } catch (err) {
    console.log(`Error : ${err}`);
  }
}

const getTemplatesClient = async (req, res) => {
  const templates = await TemplateClientUserModel.find();
  console.log("all - templates CLIENT",templates);
  try{
    res.json(templates);
  }
  catch(err){
    consolee.log(`Error : ${err}`)
  }
};

export { 
    createNewClient,
    getClient,
    getTemplatesClient
}



// auth
// register
// confirm account
// reset account
// validation token
// change password