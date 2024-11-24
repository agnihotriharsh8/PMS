# Healthcare API

This is a backend API for a healthcare system built using **Express.js**. It includes user authentication with JWT, role-based access control (for Patient, Doctor, and Admin), patient record management, and appointment management functionalities.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Setup and Installation](#setup-and-installation)
- [Environment Variables](#environment-variables)
- [Postman Collection](#postman-collection)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Tech Stack

- **Backend**: Node.js with Express.js
- **Authentication**: JWT (JSON Web Token)
- **Database**: PostgreSQL
- **Testing**: Jest, Supertest
- **API Documentation**: Postman

## Features

- **User Authentication**: 
  - Register and login for patients, doctors, and admins using JWT-based authentication.
  - Role-based access control with three user roles: **Patient**, **Doctor**, **Admin**.
  
- **Patient Record Management**:
  - CRUD operations for managing patient records.
  - Doctors can create, read, and update patient records.
  - Patients can view their own records.
  - Admins have full access to all patient records.

- **Appointment Management**:
  - Patients can create appointments with doctors.
  - Doctors can read and update appointments assigned to them.
  - Admins can manage all appointments.

## API Endpoints

### Authentication Endpoints
- **POST /api/auth/register** - Register a new user (Patient, Doctor, Admin)
- **POST /api/auth/login** - Login to receive a JWT token

### Patient Record Endpoints
- **POST /api/patients** - Create a new patient record (Doctor/Admin only)
- **GET /api/patients** - Retrieve all patient records (Doctor/Admin only)
- **GET /api/patients/:id** - Retrieve a single patient record by ID (Doctor/Admin only)
- **PUT /api/patients/:id** - Update a patient record (Doctor/Admin only)

### Appointment Endpoints
- **POST /api/appointments** - Create a new appointment (Patient)
- **GET /api/appointments** - Retrieve all appointments (Doctor/Admin)
- **PUT /api/appointments/:id** - Update an appointment (Doctor/Admin)
- **DELETE /api/appointments/:id** - Delete an appointment (Admin)

## Setup and Installation

Follow these steps to get your project up and running.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/healthcare-api.git
cd healthcare-api
