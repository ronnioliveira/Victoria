import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const getInsuranceInfo = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching insurance info:', error);
        throw error;
    }
};