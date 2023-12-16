// import generateId from "../helpers/generateId.js";
// import generateJWT from "../helpers/generateJWT.js";
// import UserModel from "../models/UserModels.js"

import TemplateClientUserModel from "../models/TemplateClientUser.js";

// auth ok
// register new resident/tutor
const createNewClient = async (req,res) => {
  console.log("req.user : ",req.user);
  console.log("req.user._id : ",req.user._id);
  const template = new TemplateClientUserModel(req.body);
   template.creator= req.user._id; 
  // if (consulta) {  console.log(consulta) }
console.log("req.body) :: ",req.body)
  try {
    // console.log("template : ",template);
     const templateSave =  await template.save();
    // req.template   =  await TemplateModel.findById(template._id).select(" -createdAt -updatedAt -__v");
    // console.log("req.template : ",req.template);
     res.json(req.body);

  } catch (err) {
    console.log(`Error : ${err}`);
  }
}

export { 
    createNewClient
}



// auth
// register
// confirm account
// reset account
// validation token
// change password