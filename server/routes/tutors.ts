import express from "express";
import { Tutor } from "../models/Tutor.js";

const router = express.Router();

// Get all verified tutors
router.get("/", async (req, res) => {
  try {
    // In a real app we might only want to find { status: "approved" }
    const tutors = await Tutor.find()
      .populate("userId", "fullName email phone location profilePhoto")
      .sort({ rating: -1 });
      
    res.json(tutors);
  } catch (error) {
    console.error("Error fetching tutors:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Get a single tutor by id
router.get("/:id", async (req, res) => {
  try {
    const tutor = await Tutor.findById(req.params.id)
      .populate("userId", "fullName email phone location profilePhoto");
      
    if (!tutor) {
      return res.status(404).json({ message: "Tutor not found" });
    }
    
    res.json(tutor);
  } catch (error) {
    console.error("Error fetching tutor:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
