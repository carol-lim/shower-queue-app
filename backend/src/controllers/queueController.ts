import { Request, Response } from 'express';
// import queueData from '../MockData/QueueList.json';
import supabase from '../utils/db_utils';


export const getQueueList = async (req: Request, res: Response) => {
    try {;
        const { data, error } = await supabase
            .from('queues')
            .select('*, user_profiles(name, gender)',)
        if (error) {
            console.error('Error fetching queue list:', error);
            return res.status(500).json({ error: 'Failed to retrieve queue list' });
        }
        if (data) {
            console.log('Queue data:', data);
            return res.status(200).json(data);
        } else {
            return res.status(404).json({ message: 'No queue data found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve queue list' });
    }
}