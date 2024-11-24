
// Author: Harsh Agnihotri
// Date: 24/11/2024

const db = require('../db/db');

const createAppointment = async (req, res) => {
    const { patient_id, doctor_id, appointment_date } = req.body;
    try {
        const result = await db.query(
            'INSERT INTO appointments (patient_id, doctor_id, appointment_date) VALUES ($1, $2, $3) RETURNING *',
            [patient_id, doctor_id, appointment_date]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getAppointments = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM appointments');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { createAppointment, getAppointments };
