//CT-2 : cambio-de-posicion
import mongoose from "mongoose";
// import bcrypt from "bcrypt";

const CT_7_Schema = mongoose.Schema(
  {  
    //residente
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"ClientUser",
      required: true,
    },
    templateClasification:{
      type: String,
      required: true,
      trim: true,
      default:"CT_7"
    },
    template:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"Template",
      required: true
    },
    PC: {
      type: String,
      required: true,
      enum:["AM","PM"]
    },
    clasification: {
      type: String,
      required: true,
      enum:["Diuresis","Deposiciones"]
    },
    Obs: {
      type: String
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"User",
      required: true
    },
  },
  {
    timestamps: true,
  }
);

// middleware y hooks

const TemplateCT7 = mongoose.model("CT_7", CT_7_Schema);

export default TemplateCT7;
