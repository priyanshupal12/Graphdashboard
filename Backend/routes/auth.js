import express from 'express'
import { loginUser, logoutUser } from '../contollers/user.controller.js';

const router = express.Router();

// router.route('/regisubmit').post(registerUser);
router.route('/logsubmit').post(loginUser);
router.route('/logout').post(logoutUser);

export default router;