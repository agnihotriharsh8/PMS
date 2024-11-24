
// Author: Harsh Agnihotri
// Date: 24/11/2024

const db = require('./db');

const getUserByEmail = async (email) => {
    const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    return result.rows[0];
};

const createUser = async (name, email, hashedPassword, role) => {
    const result = await db.query(
        'INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING id',
        [name, email, hashedPassword, role]
    );
    return result.rows[0];
};

module.exports = { getUserByEmail, createUser };
