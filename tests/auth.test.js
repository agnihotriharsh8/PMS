
// Author: Harsh Agnihotri
// Date: 24/11/2024

const request = require('supertest');
const app = require('../app');

describe('Auth API', () => {
    test('should register a new user', async () => {
        const response = await request(app).post('/api/auth/register').send({
            name: 'John Doe',
            email: 'john@example.com',
            password: 'password123',
            role: 'Patient',
        });
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('id');
    });

    test('should log in an existing user', async () => {
        const response = await request(app).post('/api/auth/login').send({
            email: 'john@example.com',
            password: 'password123',
        });
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('token');
    });
});
