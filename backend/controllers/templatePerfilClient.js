// import generateId from "../helpers/generateId.js";
// import generateJWT from "../helpers/generateJWT.js";
// import UserModel from "../models/UserModels.js"



// fnund
const fnund = async (req,res) => {
    console.log("desde perfil");
    const { user } = req;
    res.json(user);
}

export { 
    fnund
}



// auth
// register
// confirm account
// reset account
// validation token
// change password