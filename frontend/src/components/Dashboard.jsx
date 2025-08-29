import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard({ users }) {
  return (
    <div className="container mt-4">
      <h2 className="text-center text-info mb-4">Dashboard</h2>
      <div className="d-flex justify-content-center mb-4">
        <Link to="/book" className="btn btn-primary mx-2">Book Appointment</Link>
        <Link to="/appointments" className="btn btn-warning">View Appointments</Link>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <h4 className="text-primary">Doctors</h4>
          <ul className="list-group shadow-sm">
            {users.filter(u => u.role === "doctor").map((d, i) => (
              <li key={i} className="list-group-item">{d.username}</li>
            ))}
          </ul>
        </div>
        <div className="col-md-6 mb-4">
          <h4 className="text-success">Patients</h4>
          <ul className="list-group shadow-sm">
            {users.filter(u => u.role === "patient").map((p, i) => (
              <li key={i} className="list-group-item">{p.username}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
