// CT : general
import mongoose from "mongoose";

const TemplateSchema = mongoose.Schema(
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"ClientUser",
      required: true
  },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    type: {
      type: String,
      required: true
    },
    contributors:  {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
      default: [],
      set: contributors => [...new Set(contributors)]
    }
  },
  {
    timestamps: true,
  }
);

const TemplateModel = mongoose.model("Template", TemplateSchema);

export default TemplateModel;


