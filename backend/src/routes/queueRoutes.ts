import express from 'express';
import { getQueueList } from '../controllers/queueController';

const router = express.Router();

router.get('/', getQueueList);

export default router;