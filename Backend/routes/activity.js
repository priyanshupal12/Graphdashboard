import express from 'express'
import { verifyToken } from '../middleware/verifyJwt.js';
import { activities } from '../contollers/activity.controller.js';
import { verifyRole } from '../middleware/verifyRole.js';

const router = express.Router({ mergeParams: true })

router.route('/:id').patch(verifyToken, verifyRole(['teacher', 'principal']), activities)

export default router;