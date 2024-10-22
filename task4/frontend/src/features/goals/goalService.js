import axios from "axios";

const API_URL = '/api/goal/';

const createGoal = async (goalData, token) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    }
    
    const response = await axios.post(API_URL, goalData, config);

    return response.data;
}

const getGoals = async (goalData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        params: {email:goalData}  // Add goalData to the params
    };
    
    const response = await axios.get(API_URL, config);
    
    return response.data;
};

const deleteGoal = async (goalID, token) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    }
    const response = await axios.delete(API_URL + goalID,config);

    return response.data;
}

const goalService = {
    createGoal,
    getGoals,
    deleteGoal,
}

export default goalService
            

