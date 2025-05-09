import axios from 'axios';

const API_BASE_URL = `http://localhost:${import.meta.env.VITE_API_PORT || 3000}`;


export const getQueueList = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/queue`);
        return response.data;
    } catch (error) {
        console.error('Error fetching queue list:', error);
        throw error;
    }
};