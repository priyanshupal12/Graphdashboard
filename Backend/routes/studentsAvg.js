import express from 'express'
import { verifyToken } from '../middleware/verifyJwt.js';
import { all_Student_of_the_Class, class_Average_markes_And_activity, class_spacific_Subj_Avg, class_spacific_Avt_Avg } from '../contollers/studentsAvg.controller.js';

const router = express.Router({ mergeParams: true })

router.route('/students').get(verifyToken, all_Student_of_the_Class);
router.route('/average').get(verifyToken, class_Average_markes_And_activity);
router.route('/average/subject/:subjectId').get(verifyToken, class_spacific_Subj_Avg);
router.route('/average/activity/:activityId').get(verifyToken, class_spacific_Avt_Avg);

export default router;
