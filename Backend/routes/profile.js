import express from 'express'
import { personProfile } from '../contollers/userProfiles.controller.js'
import { verifyToken } from '../middleware/verifyJwt.js';

const router = express.Router()

router.route('/person').get(verifyToken, personProfile);

export default router;