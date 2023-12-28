import jwt from 'jsonwebtoken';
import UserModel from '../models/UserModels.js';

const checkAuth = async (req, res, next) => {
  // user auth ok
  // token correct

  let token;
  console.log("req.headers.authorization :: ",req.headers.authorization)
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
        //get token
        token = req.headers.authorization.split(' ')[1]; //codificated
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const existUser =  await UserModel.findById(decoded.id).select("-password -confirmated -token -createdAt -updatedAt -__v");
        console.log("existUser : ",existUser);
        req.user = await UserModel.findById(decoded.id).select("-password -confirmated -token -createdAt -updatedAt -__v");
        return next();

    } catch (err) {
        return res.status(404).json({msg:'Hubo un error'})
    }
  }

  if(!token){
    const err = new Error("Token Inválido.")
    return res.status(401).json({msg:err.message})
  }

  next();
};
export default checkAuth;
