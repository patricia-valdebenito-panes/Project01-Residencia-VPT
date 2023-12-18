//CT-1 : perfil
import mongoose from "mongoose";
// import bcrypt from "bcrypt";

const clientUserSchema = mongoose.Schema(
  {
    client: {
      type: String,
      required: true,
      trim: true,
    },
    //email,password:tutor
    lastnamemother: {
      type: String,
      required: true,
      trim: true,
    },
    lastnamefather: {
      type: String,
      required: true,
      trim: true,
    },
    rut: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    country: {
      type: String,
      required: true,
      trim: true,
    },
    dependencyNivel: {
      type: String,
      required: true,
      trim: true,
    },
    rol: { // Residente/Tutor/
        type: String,
        required: true,
        trim: true,
    },
    confirmated: {
      type: Boolean,
      default: false,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"User",
      required: true
    },
    // id_template:{
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref:"Template",
    //   required: true
    // },
    // token: {
    //   type: String,
    // },
  },
  {
    timestamps: true,
  }
);

// middleware y hooks

// model
const TemplateClientUserModel = mongoose.model("ClientUser", clientUserSchema);

export default TemplateClientUserModel;
