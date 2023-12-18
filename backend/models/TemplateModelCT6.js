//CT-6 : signos-vitales
import mongoose from "mongoose";
// import bcrypt from "bcrypt";

const CT_6_Schema = mongoose.Schema(
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
      default:"CT_6"
    },
    template:{
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

const TemplateCT6 = mongoose.model("CT_6", CT_6_Schema);

export default TemplateCT6;
