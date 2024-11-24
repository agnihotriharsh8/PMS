
// Author: Harsh Agnihotri
// Date: 24/11/2024

const db = require('../db/db');

const createAppointmentRecord = async (patient_id, doctor_id, appointment_date) => {
    const result = await db.query(
        'INSERT INTO appointments (patient_id, doctor_id, appointment_date) VALUES ($1, $2, $3) RETURNING *',
        [patient_id, doctor_id, appointment_date]
    );
    return result.rows[0];
};

const fetchAllAppointments = async () => {
    const result = await db.query('SELECT * FROM appointments');
    return result.rows;
};

module.exports = { createAppointmentRecord, fetchAllAppointments };
