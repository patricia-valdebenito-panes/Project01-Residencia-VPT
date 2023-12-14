import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    confirmated: {
      type: Boolean,
      default: false,
    },
    token: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// middleware y hooks
// funciones que se ejecutan antes y post
userSchema.pre("save", async function (next) {
  // caso: password en modificación.
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.validatePassword = async function(passwordForm){
  return await bcrypt.compare(passwordForm,this.password);
}

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
