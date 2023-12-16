//CT-6-2 : signos-vitales
import mongoose from "mongoose";
// import bcrypt from "bcrypt";

const CT_6_2_Schema = mongoose.Schema(
  {  
    //Paciente//residente
    name: {
      type: String,
      required: true,
      trim: true,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"User",
      required: true
    },
    id_template:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"Template",
      required: true
    },
    presion: {
      type: mongoose.Decimal128,
    },
    pulse: {
      type: mongoose.Decimal128,
    },
    temperature: {
        type: mongoose.Decimal128,
      },
    FR: {
        type: mongoose.Decimal128,
    },
    SAC: {
      type: mongoose.Decimal128,
    },
    Obs: {
      type: String
    },
  },
  {
    timestamps: true,
  }
);

// middleware y hooks


const TemplateCT62 = mongoose.model("CT_6_2", CT_6_2_Schema);

export default TemplateCT62;
