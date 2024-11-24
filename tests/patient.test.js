
// Author: Harsh Agnihotri
// Date: 24/11/2024

const request = require('supertest');
const app = require('../app');

describe('Patient API', () => {
    test('should create a new patient record', async () => {
        const response = await request(app)
            .post('/api/patients')
            .send({ name: 'Jane Doe', age: 30, medical_history: 'None' })
            .set('Authorization', `Bearer VALID_TOKEN`);
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('id');
    });

    test('should fetch all patients', async () => {
        const response = await request(app).get('/api/patients').set('Authorization', `Bearer VALID_TOKEN`);
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
    });
});
