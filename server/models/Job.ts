import mongoose from "mongoose";

const tuitionJobSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  subject: { type: String, required: true },
  classGrade: { type: String, required: true },
  location: { type: String, required: true },
  tuitionType: { type: String, enum: ["Home", "Online"], required: true },
  budget: { type: String, required: true },
  
  status: {
    type: String,
    enum: ["open", "assigned", "closed"],
    default: "open"
  },
  
  assignedTutorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tutor",
    default: null
  }
}, {
  timestamps: true
});

export const TuitionJob = mongoose.model("TuitionJob", tuitionJobSchema);
