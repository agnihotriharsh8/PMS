
// Author: Harsh Agnihotri
// Date: 24/11/2024

const request = require('supertest');
const app = require('../app');

describe('Appointment API', () => {
    let token;

    beforeAll(async () => {
        // Assuming a user already exists with role "Patient"
        const loginResponse = await request(app).post('/api/auth/login').send({
            email: 'patient@example.com',
            password: 'password123',
        });
        token = loginResponse.body.token;
    });

    test('should create a new appointment', async () => {
        const response = await request(app)
            .post('/api/appointments')
            .set('Authorization', `Bearer ${token}`)
            .send({
                patient_id: 1, // Replace with a valid patient ID
                doctor_id: 2,  // Replace with a valid doctor ID
                appointment_date: '2024-11-25T14:30:00Z',
            });

        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('appointment_date', '2024-11-25T14:30:00Z');
    });

    test('should fetch all appointments', async () => {
        const response = await request(app)
            .get('/api/appointments')
            .set('Authorization', `Bearer ${token}`);

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
        if (response.body.length > 0) {
            expect(response.body[0]).toHaveProperty('id');
            expect(response.body[0]).toHaveProperty('appointment_date');
        }
    });
});
