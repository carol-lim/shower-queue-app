import { Request, Response } from 'express';
import queueData from '../MockData/QueueList.json';

export const getQueueList = async (req: Request, res: Response) => {
    try {;
        res.status(200).json(queueData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve queue list' });
    }
}