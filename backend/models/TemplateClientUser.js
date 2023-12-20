//CT-1 : perfil
import mongoose from "mongoose";
// import bcrypt from "bcrypt";

const clientUserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
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
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"User",
      required: true
    },
    template:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"Template",
      required: true
    },
    // token: { // considerar notificacion de edicion
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
