import { StateDataType } from './counterState';
const URL = 'https://counter-backend-32kc.onrender.com/api/counter'

export const getCounterValues = async():Promise<StateDataType> => {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching counter values:', error);
        throw error;
    }
}

