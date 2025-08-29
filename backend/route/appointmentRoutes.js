const express = require("express");
const Appointment = require("../models/Appointment");
const router = express.Router();

// Book Appointment
router.post("/book", async (req, res) => {
  try {
    const { patientName, department, date, time, symptoms } = req.body;

    const appointment = new Appointment({
      patientName,
      department,
      date,
      time,
      symptoms,
    });

    await appointment.save();
    res.json({ message: "Appointment booked successfully", appointment });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Cancel Appointment
router.put("/cancel/:id", async (req, res) => {
  try {
    await Appointment.findByIdAndUpdate(req.params.id, { status: "cancelled" });
    res.json({ message: "Appointment cancelled" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Appointments
router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
