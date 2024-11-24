
// Author: Harsh Agnihotri
// Date : 23/11/2024

const db = require('../db/db');

const createPatientRecord = async (name, age, medical_history, created_by) => {
    const result = await db.query(
        'INSERT INTO patients (name, age, medical_history, created_by) VALUES ($1, $2, $3, $4) RETURNING *',
        [name, age, medical_history, created_by]
    );
    return result.rows[0];
};

const fetchAllPatients = async () => {
    const result = await db.query('SELECT * FROM patients');
    return result.rows;
};

const updatePatientRecord = async (id, name, age, medical_history) => {
    const result = await db.query(
        'UPDATE patients SET name = $1, age = $2, medical_history = $3 WHERE id = $4 RETURNING *',
        [name, age, medical_history, id]
    );
    return result.rows[0];
};

module.exports = { createPatientRecord, fetchAllPatients, updatePatientRecord };
