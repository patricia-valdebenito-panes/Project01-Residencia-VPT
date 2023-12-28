//CT-4 : vacunas
import mongoose from "mongoose";
// import bcrypt from "bcrypt";

const CT_4_Schema = mongoose.Schema(
  {
    //residente
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ClientUser",
      required: true,
    },
    template: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Template",
      required: true,
    },
    name: [{
      type: String,
    }],
    clasificationVaccine: {
      type: String,
      required: true,
      // enum:["Vacuna","Complejo Vit. B12 (Neurobionta)","Otro"]
    },
    // Próx. Fecha de vacuna
    applyNext: {
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

const TemplateCT4 = mongoose.model("CT_4", CT_4_Schema);

export default TemplateCT4;
