import express from "express";
import { TuitionJob } from "../models/Job.js";

const router = express.Router();

// Get all jobs
router.get("/", async (req, res) => {
  try {
    const jobs = await TuitionJob.find()
      .populate("studentId", "fullName email location profilePhoto")
      .sort({ createdAt: -1 });
      
    res.json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Create a job (would normally require auth middleware)
router.post("/", async (req, res) => {
  try {
    const { 
      studentId, title, description, subject, 
      classGrade, location, tuitionType, budget 
    } = req.body;
    
    // In a real app, studentId comes from req.user.userId from auth middleware

    const newJob = new TuitionJob({
      studentId,
      title,
      description,
      subject,
      classGrade,
      location,
      tuitionType,
      budget
    });

    await newJob.save();
    
    res.status(201).json(newJob);
  } catch (error) {
    console.error("Error creating job:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
