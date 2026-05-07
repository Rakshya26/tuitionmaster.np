import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
  url: String,
  type: String, // 'image', 'document'
  name: String
});

const tutorSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  bio: { type: String, default: "" },
  qualification: { type: String, required: true },
  experienceYears: { type: Number, required: true },
  subjects: [{ type: String }],
  preferredClasses: [{ type: String }],
  areasCovered: [{ type: String }],
  teachingMode: [{ type: String, enum: ["Home", "Online", "Tutor Place"] }],
  hourlyFee: { type: Number },
  
  // Verification
  documents: [fileSchema], // IDs, certificates
  isVerified: { type: Boolean, default: false },
  status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
  
  // Stats
  rating: { type: Number, default: 0 },
  reviewsCount: { type: Number, default: 0 },
  
  availability: [{
    day: String,
    slots: [String]
  }]
}, {
  timestamps: true
});

export const Tutor = mongoose.model("Tutor", tutorSchema);
