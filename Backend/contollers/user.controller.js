import pool from '../config/db/db.mysql.js'
import bcrypt from 'bcrypt'
import { generateAccessToken, generateRefreshToken } from '../utils/tokens.js';

const registerUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'email and password are required.' });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'invalid email formate.' });
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const sql = 'INSERT INTO users (email, password) VALUES (?, ?)';
        const [result] = await pool.execute(sql, [email, hashedPassword]);

        res.status(201).json({ message: 'User created successfully.', userId: result.insertId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error.' });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'email and password are required.' });
    }
    console.log(req.body)

    try {
        const sql = 'SELECT id, email, password FROM users WHERE email = ?';
        const [result] = await pool.execute(sql, [email]);

        if (result.length === 0) {
            return res.status(400).json({ error: 'No such user' });
        }

        const user = result[0];
        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(400).json({ error: 'Invalid password' });
        }

        // ✅ Issue both tokens
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        // ✅ Store refreshToken in HTTP-only cookie
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: true,          // only over HTTPS
            sameSite: 'Strict',    // CSRF protection
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });

        res.status(200).json({
            message: 'User login successful',
            user: { id: user.id, email: user.email },
            accessToken,
            refreshToken
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error.' });
    }
};

const logoutUser = (req, res) => {
    res.clearCookie('refreshToken', { httpOnly: true, secure: true, sameSite: 'Strict' });
    res.json({ message: 'Logged out' });
}


export { registerUser, loginUser, logoutUser };