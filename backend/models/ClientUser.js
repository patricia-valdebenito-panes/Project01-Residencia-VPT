import mongoose from "mongoose";
// import bcrypt from "bcrypt";

const clientUserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    //email,password:tutor
    lasnamemother: {
      type: String,
      required: true,
      trim: true,
    },
    lasnamefather: {
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
const ClientUserModel = mongoose.model("ClientUser", clientUserSchema);

export default ClientUserModel;
