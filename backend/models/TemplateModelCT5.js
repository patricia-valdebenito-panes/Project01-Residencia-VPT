//CT-5 : health care record
import mongoose from "mongoose";
// import bcrypt from "bcrypt";

const CT_5_Schema = mongoose.Schema(
  {
    //residente
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ClientUser",
      required: true,
    },
    templateClasification: {
      type: String,
      required: true,
      trim: true,
      default: "CT_5",
    },
    template: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Template",
      required: true,
    },
    date:{
      type: Date,
      required: true,
      default: Date.now()
    },
    // Control de signos vitales
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
    SAC: { // Saturacion
      type: mongoose.Decimal128,
    },
    motive: { // Saturacion
      type: mongoose.Decimal128,
    },
    motive: { // Saturacion
      type: mongoose.Decimal128,
    },
    PE: { // Examen fisico 
      type: String,
      required: false,
      trim: true
    },
    indications: {  
      type: String,
      required: false,
      trim: true
    },
    doctorName: {  
      type: String,
      required: false,
      trim: true
    },
    doctorClasificacion: {  
      type: String,
      required: false,
      trim: true
    },
    doctorRut: {  
      type: String,
      required: false,
      trim: true
    },
    // Próx. Fecha health care record
    cureNext: {
      type: Date,
      required: true,
      default: Date.now()
    },
    Obs: {
      type: String,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// middleware y hooks

const TemplateCT5 = mongoose.model("CT_5", CT_5_Schema);

export default TemplateCT5;
