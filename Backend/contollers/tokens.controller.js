import { generateAccessToken } from "../utils/tokens.js";
import jwt from "jsonwebtoken";

export function refreshToken(req, res) {
    const cookies = req.cookies;
    if (!cookies?.refreshToken) return res.status(401).json({ error: 'No refresh token' });

    const refreshToken = cookies.refreshToken;

    jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, (err, decoded) => {
        if (err) return res.status(403).json({ error: 'Invalid refresh token' });

        const accessToken = generateAccessToken({ id: decoded.id, email: decoded.email, role: decoded.role });

        res.json({ accessToken });
    });
}