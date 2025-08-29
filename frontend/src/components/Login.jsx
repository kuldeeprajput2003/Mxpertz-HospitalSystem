import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(form);
    setForm({ username: "", password: "" });
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
      {/* ✅ Overlay for dull effect */}
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

      {/* ✅ Login card */}
      <div className="card shadow-lg p-4" style={{ width: "400px", zIndex: 2 }}>
        <h2 className="text-center text-success mb-3">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              className="form-control"
              placeholder="Username"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              required
            />
          </div>
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
          <button type="submit" className="btn btn-success w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
