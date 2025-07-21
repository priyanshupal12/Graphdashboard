import express from 'express'
import { verifyToken } from '../middleware/verifyJwt.js';
import { markes } from '../contollers/marks.controller.js';
import { verifyRole } from '../middleware/verifyRole.js';

const router = express.Router({ mergeParams: true })

router.route('/:id').patch(verifyToken, verifyRole(['teacher', 'principal']), markes)

export default router;