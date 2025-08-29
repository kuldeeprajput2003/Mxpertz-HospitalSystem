const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  specialization: { type: String, required: true }, // Example: Cardiology, Neurology
  experience: { type: Number, default: 0 }, // years of experience
});

module.exports = mongoose.model("Doctor", doctorSchema);
