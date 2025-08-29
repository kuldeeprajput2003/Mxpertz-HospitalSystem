import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "patient",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Registration successful! Redirecting to login...");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setMessage(`❌ ${data.msg || "Registration failed"}`);
      }
    } catch (error) {
      setMessage("⚠️ Server error. Please try again later.");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: "url('/images/doctor.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* 🔹 Dark overlay for dull effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // adjust 0.5 for more/less dull
          zIndex: 0,
        }}
      ></div>

      {/* 🔹 Registration card on top */}
      <div
        className="card shadow-lg p-4"
        style={{ width: "400px", zIndex: 1, backgroundColor: "rgba(255,255,255,0.95)" }}
      >
        <h2 className="text-center text-primary mb-3">Register</h2>
        {message && <div className="alert alert-info">{message}</div>}

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-3">
            <input
              className="form-control"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>

          {/* Role Selection */}
          <div className="mb-3">
            <select
              className="form-control"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            >
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>

        {/* Already have an account? */}
        <p className="mt-3 text-center">
          Already have an account?{" "}
          <span
            className="text-primary fw-semibold"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
