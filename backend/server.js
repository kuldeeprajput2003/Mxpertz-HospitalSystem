const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/hospitalDB")
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log(err));

// Import Routes
const authRoutes = require("./route/authRoutes");
const appointmentRoutes =require("./route/appointmentRoutes");
const doctorAuth=require("./route/doctorAuth");
app.use("/api/auth", authRoutes);
app.use("/api/doctor", doctorAuth);
app.use("/api/appointments", appointmentRoutes);


// Start Server
app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});
