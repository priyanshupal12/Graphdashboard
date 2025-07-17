import express from 'express'
import { refreshToken } from '../contollers/tokens.controller.js';

const router = express.Router()

router.get('/refresh', refreshToken);

export default router;