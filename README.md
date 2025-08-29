# Mxpertz
# 🏥 MERN Hospital Appointment System

A **MERN Stack Hospital Appointment System** that allows patients to **register, login, book appointments, and cancel appointments**.  
Admins/Doctors can manage appointments and view patient bookings.  

---

## 📂 Project Structure

hospital-appointment-system/
|── frontend # React + Vite client


|── backend # Node.js + Express server


---

## 🚀 Features

- 👤 **Authentication**
  - User Registration & Login (JWT authentication)
  - Passwords securely hashed using **bcryptjs**

- 📅 **Appointments**
  - Book an appointment with a doctor
  - Cancel an appointment
  - View all upcoming appointments

- 👨‍⚕️ **Doctors/Admin**
  - View and manage patient appointments

- 🗄️ **Tech Stack**
  - **MongoDB + Mongoose** for database
  - **Express + Node.js** for backend API
  - **React (Vite) + React Router** for frontend
  - **Bootstrap/React-Bootstrap** for UI
  - **Axios** for API communication

---

## ⚙️ Installation Guide

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/hospital-appointment-system.git
cd hospital-appointment-system

---

## Backend Setup

cd backend
npm install

Create a .env file in backend/ with:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Run backend:

node index.js
# or
npx nodemon index.js
Backend runs on: http://localhost:5000

## Frontend Setup

cd frontend
npm install

Run frontend
npm run dev
Frontend runs on: http://localhost:5173

## Dependencies

### Frontend

React

React Router DOM

Axios

Bootstrap / React Bootstrap

Vite

### Backend

Express

Mongoose

Bcryptjs

Jsonwebtoken

CORS

Dotenv

Nodemon

## API Documentation

User Registration

Endpoint:
POST /api/auth/register

### Request Body:

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "mypassword123"
}

### Response:

{
  "message": "User registered successfully",
  "user": {
    "_id": "64a1f0...",
    "name": "John Doe",
    "email": "john@example.com"}
}

### User Login

Endpoint:
POST /api/auth/login

### Request Body:

{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

### Book Appointment
Endpoint:
POST /api/appointments/book

### Headers:

Authorization: Bearer <your_token>

### Request Body:

{
  "doctor": "Dr. Smith",
  "date": "2025-09-01",
  "time": "10:30 AM"
}

### Response:

{
  "message": "Appointment booked successfully",
  "appointment": {
    "_id": "64a2b1...",
    "doctor": "Dr. Smith",
    "date": "2025-09-01",
    "time": "10:30 AM" }
}

### Cancel Appointment

Endpoint:
DELETE /api/appointments/cancel/:id

### Headers:

Authorization: Bearer <your_token>

### Response:

[
  {
    "_id": "64a2b1...",
    "doctor": "Dr. Smith",
    "date": "2025-09-01",
    "time": "10:30 AM"
  }
]

## 🛠️ Scripts

### Frontend

npm run dev → Start frontend dev server

npm run build → Build for production

npm run preview → Preview production build

### Backend

node index.js → Run backend

npx nodemon index.js → Run backend with auto-restart

## 🤝 Contributing

Contributions are welcome!

Fork the repo

Create a feature branch

Commit changes

Open a Pull Request 🚀

## 📄 License
This project is licensed under the ISC License.


---

Would you also like me to **add database schema documentation** (like `User` and `Appointment` models) in this README so developers can quickly understand the data structure?
