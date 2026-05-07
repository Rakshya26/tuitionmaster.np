import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    // Optional if using Google Login
    required: false,
  },
  phone: {
    type: String,
    default: "",
  },
  role: {
    type: String,
    enum: ["student", "tutor", "admin"],
    default: "student",
  },
  location: {
    type: String,
    default: "",
  },
  profilePhoto: {
    type: String,
    default: "",
  },
  isEmailVerified: {
    type: Boolean,
    default: false,
  },
  googleId: {
    type: String,
    default: null,
  }
}, {
  timestamps: true
});

export const User = mongoose.model("User", userSchema);
