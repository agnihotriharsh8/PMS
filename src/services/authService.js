
// Author: Harsh Agnihotri
// Date: 24/11/2024

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db/db');

const registerUser = async (name, email, password, role) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await db.query(
        'INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING id, name, role',
        [name, email, hashedPassword, role]
    );
    return result.rows[0];
};

const authenticateUser = async (email, password) => {
    const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    if (result.rows.length === 0) throw new Error('Invalid credentials');
    const user = result.rows[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid credentials');
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { user, token };
};

module.exports = { registerUser, authenticateUser };
