const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patientName: { type: String, required: true },   // Patient Name entered in UI
  department: { type: String, required: true },    // Selected Department
  date: { type: Date, required: true },            // Appointment Date
  time: { type: String, required: true },          // Appointment Time (stored as string, e.g. "10:30 AM")
  symptoms: { type: String, required: true },      // Reason / Symptoms
  status: { 
    type: String, 
    enum: ["booked", "cancelled"], 
    default: "booked" 
  },
}, { timestamps: true }); // automatically adds createdAt, updatedAt

module.exports = mongoose.model("Appointment", appointmentSchema);
