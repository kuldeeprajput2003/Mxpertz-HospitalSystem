import React, { useState } from "react";
import axios from "axios";

export default function AppointmentForm() {
  const [form, setForm] = useState({
    patientName: "",
    department: "",
    date: "",
    time: "",
    symptoms: "",
  });

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // API Call
      const res = await axios.post("http://localhost:5000/api/appointments/book", form);

      setMessage(res.data.message);

      // Reset form
      setForm({
        patientName: "",
        department: "",
        date: "",
        time: "",
        symptoms: "",
      });
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: "url('/images/doctor.jpg')",  // keep your image inside public/images
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Overlay for dull effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)", // darker transparent overlay
          zIndex: 1,
        }}
      ></div>

      {/* Card (comes above overlay) */}
      <div
        className="card shadow-lg p-4"
        style={{ width: "500px", zIndex: 2, backgroundColor: "rgba(255,255,255,0.95)" }}
      >
        <h2 className="text-center text-danger mb-3">Book Appointment</h2>

        {message && <div className="alert alert-info">{message}</div>}

        <form onSubmit={handleSubmit}>
          {/* Patient Name */}
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Patient Name"
              value={form.patientName}
              onChange={(e) => setForm({ ...form, patientName: e.target.value })}
              required
            />
          </div>

          {/* Department */}
          <div className="mb-3">
            <select
              className="form-control"
              value={form.department}
              onChange={(e) => setForm({ ...form, department: e.target.value })}
              required
            >
              <option value="">Select Department</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Neurology">Neurology</option>
              <option value="Orthopedics">Orthopedics</option>
              <option value="Dermatology">Dermatology</option>
            </select>
          </div>

          {/* Date */}
          <div className="mb-3">
            <input
              type="date"
              className="form-control"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              required
            />
          </div>

          {/* Time */}
          <div className="mb-3">
            <input
              type="time"
              className="form-control"
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
              required
            />
          </div>

          {/* Symptoms */}
          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Enter Symptoms / Reason"
              rows="3"
              value={form.symptoms}
              onChange={(e) => setForm({ ...form, symptoms: e.target.value })}
              required
            />
          </div>

          {/* Submit */}
          <button type="submit" className="btn btn-danger w-100">
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
}
