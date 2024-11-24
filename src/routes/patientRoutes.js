
// Author: Harsh Agnihotri
// Date : 23/11/2024

const express = require('express');
const { createPatient, getPatients, updatePatient } = require('../controllers/patientController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

const router = express.Router();

router.post('/', authMiddleware, roleMiddleware(['Doctor', 'Admin']), createPatient);
router.get('/', authMiddleware, roleMiddleware(['Doctor', 'Admin']), getPatients);
router.patch('/:id', authMiddleware, roleMiddleware(['Doctor', 'Admin']), updatePatient);

module.exports = router;
