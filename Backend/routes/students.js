import express from 'express'
import { verifyToken } from '../middleware/verifyJwt.js';
import { studentInfo, studentInfoFull } from '../contollers/students.controller.js';

const router = express.Router({ mergeParams: true })

router.route('/:id').get(verifyToken, studentInfoFull);
router.route('/:id/average').get(verifyToken, studentInfo)
export default router;