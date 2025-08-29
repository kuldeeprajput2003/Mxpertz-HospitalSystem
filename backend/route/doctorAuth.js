const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Doctor = require("../models/Doctor");

const router = express.Router();
const JWT_SECRET = "yourSecretKey";

// Doctor Register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, specialization } = req.body;

    const existingDoctor = await Doctor.findOne({ email });
    if (existingDoctor) return res.status(400).json({ msg: "Doctor already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newDoctor = new Doctor({
      name,
      email,
      password: hashedPassword,
      specialization,
    });

    await newDoctor.save();

    res.json({ msg: "Doctor registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Doctor Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const doctor = await Doctor.findOne({ email });
    if (!doctor) return res.status(400).json({ msg: "Doctor not found" });

    const isMatch = await bcrypt.compare(password, doctor.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: doctor._id, role: doctor.role }, JWT_SECRET, { expiresIn: "1h" });

    res.json({
      token,
      doctor: {
        id: doctor._id,
        name: doctor.name,
        email: doctor.email,
        specialization: doctor.specialization,
        role: doctor.role,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
