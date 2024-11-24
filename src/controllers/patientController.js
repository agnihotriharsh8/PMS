
// Author: Harsh Agnihotri
// Date : 23/11/2024

const db = require('../db/db');

const createPatient = async (req, res) => {
    const { name, age, medical_history } = req.body;
    try {
        const result = await db.query(
            'INSERT INTO patients (name, age, medical_history, created_by) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, age, medical_history, req.user.id]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getPatients = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM patients');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updatePatient = async (req, res) => {
    const { id } = req.params;
    const { name, age, medical_history } = req.body;
    try {
        const result = await db.query(
            'UPDATE patients SET name = $1, age = $2, medical_history = $3 WHERE id = $4 RETURNING *',
            [name, age, medical_history, id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { createPatient, getPatients, updatePatient };
