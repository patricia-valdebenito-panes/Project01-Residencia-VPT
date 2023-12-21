//CT-2 : cambio-de-posicion
import mongoose from "mongoose";
// import bcrypt from "bcrypt";

const CT_2_Schema = mongoose.Schema(
  {  
    //residente
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"ClientUser",
      required: true,
    },
    PC: {
      type: String,
      required: true,
      enum:["AM","PM"]
    },
    template:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"Template",
      required: true
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"User",
      required: true
    },
    Obs: {
      type: String
    }
  },
  {
    timestamps: true,
  }
);

// middleware y hooks

const TemplateCT2 = mongoose.model("CT_2", CT_2_Schema);

export default TemplateCT2;



