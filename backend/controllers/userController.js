import emailRegister from "../helpers/email.js";
import generateId from "../helpers/generateId.js";
import generateJWT from "../helpers/generateJWT.js";
import UserModel from "../models/UserModels.js"

// auth
const loginUser = async (req,res)=>{
  // console.log(req.body)
    const { email,password }  = req.body;
    const user = await UserModel.findOne({email});
    if(!user){
        const err = new Error(`Usuario no existe.`);
        return res.status(404).json({ msg:err.message})
    }

    if(!user.confirmated){
        const err = new Error(`Cuenta no confirmada.`);
        return res.status(403).json({ msg:err.message})
    }

    if(await user.validatePassword(password)){
        return res.json({ 
            _id:user._id,
            name:user.name,
            token:generateJWT(user._id)
        })
    } else {
        const err = new Error(`Password incorrecto.`);
        return res.status(403).json({ msg:err.message})
    }

}

// register
const registerUser = async (req,res) => {
    const { email }  = req.body;
    const userRegistered = await UserModel.findOne({email});

    if(userRegistered){
        const err = new Error(`Usuario ya existe.`);
        return res.status(400).json({msg:err.message})
    }

    try{
        const user =  new UserModel(req.body);
        user.token = generateId();
        await user.save();

        emailRegister({
            name:user.name,
            email:user.email,
            token:user.token
        })

        res.json({msg:"Usuario registrado correctamente. Revisa tu email para confirmar la cuenta."})
    }
    catch(err){
        console.log(`Error : ${err}`);
    }
}

// confirm account
const confirmationUserToken = async (req,res) => {
    // console.log(`routing dinamic`, req.params.token);
    const { token }  = req.params;
    const userConfirm = await UserModel.findOne({ token });
    // console.log("token",userConfirm)

    if(!userConfirm){
        const err = new Error(`Token Inválido`);
        return res.status(403).json({msg:err.message})
    }

    try{
        userConfirm.confirmated = true;
        userConfirm.token='';//only onetime
        await userConfirm.save();
        res.json({ msg:`Usurario confirmado correctamente.`})
    }
    catch(err){
        console.log(`Error: ${err.message}`);
        return res.status(403).json({msg:err.message})
    }

}

// reset account
const resetAccountPassword = async (req,res) => {
    const { email }  = req.body;
    const user = await UserModel.findOne({email});

    if(!user){
        const err = new Error(`Usuario No Existe.`);
        return res.status(400).json({msg:err.message})
    }

    try{
        user.token = generateId();
        await user.save();
        res.json({msg:"Hemos enviado link a tu email."})
    }
    catch(err){
        console.log(`Error : ${err}`);
    }
}

// validation token
const validationToken = async (req,res)=> {
    const { token }  = req.params;
    const tokenValidation = await UserModel.findOne({ token });
   
    if(tokenValidation){
        console.log(`token valido`);
        return res.json({msg:`token valido, user existe`})
    }

    if(!tokenValidation){
        const err = new Error(`Token Inválido`);
        return res.status(404).json({msg:err.message})
    }
}

// change password
const changePassword = async (req,res)=> {
    const { token }  = req.params;
    const { password }  = req.body;
    const user = await UserModel.findOne({ token });
    if(user){
        user.password = password;
        user.token="";
    
        try{
            await user.save();
            return res.json({msg:`Usuario/password modificado.`})
        }   
        catch(err){
            console.log(`Error: ${err.message}`);
        }
    }else{
        const err = new Error(`Token Inválido`);
        return res.status(404).json({msg:err.message})
    }

}

// perfil
const perfil = async (req,res) => {

    const { user } = req;
    console.log("desde perfil user:",user);
    // if(!user){      console.log("user - perfil ::", user) }

    res.json(user);
    // {
    //     "_id"
    //     "name"
    //     "email"
    //     "rol"
    // }
}

const getAllUsers = async (req,res) => {
    const users = await UserModel.find().select('_id name email rol');
    try{
      res.json(users);
    }
    catch(err){
      consolee.log(`Error : ${err}`)
    }
}

export { 
    changePassword,
    confirmationUserToken,
    getAllUsers,
    loginUser,
    perfil,
    registerUser,
    resetAccountPassword,
    validationToken
}