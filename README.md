# 🚀 Workforce Management System

A full-stack web application designed to efficiently manage workforce operations in an industrial environment.  
This system enables seamless handling of employee records, attendance tracking, and shift scheduling with role-based access control.

---

## 📖 Overview

The Workforce Management System is built to reduce manual effort in managing workers and improve operational efficiency.  
It provides a centralized platform for supervisors and managers to monitor and control workforce activities.

---

## ✨ Key Features

### 👷 Worker Management
- Add, update, and delete worker details
- Maintain employee records such as department and contact info

### 🕒 Shift Scheduling
- Assign shifts (Morning / Afternoon / Night)
- Supervisor-controlled shift management
- Workers can view assigned shifts

### 📍 Attendance Tracking
- Daily attendance marking
- Tracks presence status of workers
- Helps monitor workforce availability

### 🔐 Role-Based Access Control
- **Manager** → View system data (no modification)
- **Supervisor** → Full control over workers & shifts
- **Worker** → View personal data only

### 📊 Dashboard
- Displays workforce summary
- Shows key metrics like total workers and attendance

---

## 🛠️ Technology Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Spring Boot (Java)
- RESTful APIs

### Database
- MySQL

---

## 📂 Project Structure
workforce-project/
│
├── frontend/
│ ├── dashboard.html
│ ├── workers.html
│ ├── attendance.html
│ ├── shifts.html
│ ├── css/
│ └── js/
│
├── backend/
│ ├── src/
│ └── pom.xml
│
├── database/
│ └── workforce.sql
---
## ⚙️ Setup Instructions

### 1️⃣ Clone Repository
git clone https://github.com/Dinesh10S/Workforce-management-system.git

---

### 2️⃣ Database Setup
- Open MySQL
- Create database:
 CREATE DATABASE nokia;
 - Run:database/workforce.sql

---

### 3️⃣ Run Backend
- Open backend in IntelliJ
- Run Spring Boot application

Server:http://localhost:8080

---

### 4️⃣ Run Frontend
- Open `dashboard.html` in browser

---

## 🔗 API Endpoints

### Workers
- GET `/api/workers`
- POST `/api/workers`
- PUT `/api/workers/{id}`
- DELETE `/api/workers/{id}`

### Attendance
- GET `/api/attendance`
- POST `/api/attendance`

### Shifts
- GET `/api/shifts`
- POST `/api/shifts`
- PUT `/api/shifts/{id}`
- DELETE `/api/shifts/{id}`

---

## 🎯 Objective

To develop a scalable and efficient workforce management system that automates employee handling, reduces manual errors, and improves productivity.

---

## 🚀 Future Enhancements

- Real-time dashboard analytics
- Mobile responsive UI
- Notification system
- Secure authentication (JWT)

---

## 👨‍💻 Author

**Dinesh S**

---

## ⭐ Repository Link

https://github.com/Dinesh10S/Workforce-management-system
