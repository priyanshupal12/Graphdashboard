import express from 'express'
import { verifyToken } from '../middleware/verifyJwt.js';
import { studentData, classAverage, classSubAvg, classAvtAvg } from '../contollers/studentsAvg.controller.js';

const router = express.Router({ mergeParams: true })

router.route('/students').get(verifyToken, studentData);
router.route('/average').get(verifyToken, classAverage);
router.route('/average/subject/:subjectId').get(verifyToken, classSubAvg);
router.route('/average/activity/:activityId').get(verifyToken, classAvtAvg);

export default router;
