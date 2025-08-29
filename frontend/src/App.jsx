import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import AppointmentForm from "./components/AppointmentForm";
import Appointments from "./components/Appointment";
// ✅ New Homepage Component
function HomePage() {
  return (
    <div className="homepage text-center">
      <div
        className="hero-section"
        style={{
          backgroundImage: "url('/images/doctor.jpg')", // image in public folder
          backgroundSize: "cover",   // ensures image fills the box
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",           // 🔹 full screen height
          width: "100%",             // take full width
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <h1 className="fw-bold">
          THE BEST DOCTOR <br />
          <span style={{ color: "#00c3ff" }}>GIVES THE LEAST MEDICINES</span>
        </h1>
        <p className="lead">
          Aenean finibus, nunc imperdiet elementum vestibulum lorem
        </p>
        <Link to="/register" className="btn btn-primary mt-3">
          More Info
        </Link>
      </div>
    </div>
  );
}

function App() {
  const [users, setUsers] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const handleRegister = (user) => setUsers([...users, user]);
  const handleLogin = (credentials) =>
    alert(`Logged in as ${credentials.username}`);
  const handleBook = (appt) =>
    setAppointments([...appointments, { ...appt, status: "booked" }]);
  const handleCancel = (index) => {
    const updated = [...appointments];
    updated[index].status = "cancelled";
    setAppointments(updated);
  };

  return (
    <BrowserRouter>
      {/* ✅ Stylish Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-gradient shadow sticky-top">
        <div className="container">
          {/* Brand */}
          <Link
            className="navbar-brand fw-bold text-uppercase text-warning"
            to="/"
          >
            <i className="bi bi-hospital me-2"></i> Hospital System
          </Link>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link px-3 fw-semibold text-light hover-link"
                  to="/register"
                >
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link px-3 fw-semibold text-light hover-link"
                  to="/login"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link px-3 fw-semibold text-light hover-link"
                  to="/book"
                >
                  Book Appointment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link px-3 fw-semibold text-light hover-link"
                  to="/appointments"
                >
                  Appointments
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ✅ Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={<Register onRegister={handleRegister} />}
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/book"
          element={<AppointmentForm users={users} onBook={handleBook} />}
        />
        <Route
          path="/appointments"
          element={
            <Appointments appointments={appointments} onCancel={handleCancel} />
          }
        />
      </Routes>

      {/* ✅ Extra Navbar Styling */}
      <style>{`
        .hover-link:hover {
          color: #ffdd57 !important; /* Yellow highlight on hover */
          text-decoration: underline;
        }
      `}</style>
    </BrowserRouter>
  );
}

export default App;
