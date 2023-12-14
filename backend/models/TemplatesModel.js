// CT-6-2 : signos-vitales
import mongoose from "mongoose";


const TemplateSchema = mongoose.Schema(
  {
    //Paciente//residente
    type: {
      type: String,
      required: true
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    contributors: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
  },
  {
    timestamps: true,
  }
);

const TemplateModel = mongoose.model("Template", TemplateSchema);

export default TemplateModel;
