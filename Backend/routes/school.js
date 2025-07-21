import express from 'express'
import { verifyToken } from '../middleware/verifyJwt.js';
import { schoolinfo } from '../contollers/school.controller.js';
import { verifyRole } from '../middleware/verifyRole.js';

const router = express.Router({ mergeParams: true })
 
router.route('/average', verifyToken, verifyRole(['principal']), schoolinfo)

export default router;