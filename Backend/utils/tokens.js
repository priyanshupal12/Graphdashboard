// utils/jwt.js
import jwt from 'jsonwebtoken';

export function generateAccessToken(user) {
  return jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '15s' } // short lifetime!
  );
}

export function generateRefreshToken(user) {
  return jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: '7d' } // long lifetime!
  );
}

