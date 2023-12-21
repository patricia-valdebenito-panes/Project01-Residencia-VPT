//CT-3 : curaciones
import mongoose from "mongoose";
// import bcrypt from "bcrypt";

const CT_3_Schema = mongoose.Schema(
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
    // Tipo de curación
    typeCure: {
      type: String,
      required: true,
      // enum:[]
    },
    // Zona
    zone: {
      type: String,
      required: true,
      trim: true,
    },
    // Origen de úlcera
    UlcerOrigin: {
      type: String,
      required: true,
      trim: true,
    },
    // Valoración y evolución
    valorationAndEvolution: {
      type: String,
      required: true,
      trim: true,
    },
    // Frecuencia de curaciones
    frecuencyCure: {
      type: String,
      required: true
    },
    // Próx. Fecha de curación
    cureNext: {
      type: Date,
      required: true,
      default: Date.now()
    },
    // Responsable
    responsibleForTheCure: {
      type: String,
      required: true,
      trim: true,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    Obs: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

// middleware y hooks

const TemplateCT3 = mongoose.model("CT_3", CT_3_Schema);

export default TemplateCT3;
