import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);

  // Fetch all appointments from backend
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/appointments");
        setAppointments(res.data);
      } catch (err) {
        console.error("Error fetching appointments:", err);
      }
    };

    fetchAppointments();
  }, []);

  // Cancel appointment
  const handleCancel = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/appointments/cancel/${id}`);
      // Remove the appointment from state
      setAppointments((prev) => prev.filter((a) => a._id !== id));
    } catch (err) {
      console.error("Error cancelling appointment:", err);
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
      {/* Overlay for dull effect */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.4)",
          zIndex: 1,
        }}
      ></div>

      <div className="container mt-4 position-relative" style={{ zIndex: 2 }}>
        <h2 className="text-center text-warning mb-3">Appointments</h2>

        {appointments.length === 0 ? (
          <p className="text-center text-light">No appointments found.</p>
        ) : (
          <ul className="list-group shadow-lg">
            {appointments.map((a) => (
              <li
                key={a._id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>
                  <strong>{a.patientName}</strong> ({a.department}) <br />
                  {new Date(a.date).toLocaleDateString()} at {a.time} <br />
                  <em>Symptoms:</em> {a.symptoms}
                </span>

                {a.status === "booked" ? (
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => handleCancel(a._id)}
                  >
                    Cancel
                  </button>
                ) : (
                  <span className="badge bg-secondary">Cancelled</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
