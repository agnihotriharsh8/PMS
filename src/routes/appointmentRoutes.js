
// Author: Harsh Agnihotri
// Date: 24/11/2024

const express = require('express');
const { createAppointment, getAppointments } = require('../controllers/appointmentController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

const router = express.Router();

router.post('/', authMiddleware, roleMiddleware(['Patient', 'Admin']), createAppointment);
router.get('/', authMiddleware, roleMiddleware(['Doctor', 'Admin']), getAppointments);

module.exports = router;
