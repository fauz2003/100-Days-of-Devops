import axios from 'axios';

const API_URL = '/api/user/';

const register = async (userData) => {
    try {
        const response = await axios.post(API_URL + 'register', userData);

        if (response.data) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        throw error;
    }
};

const login = async (userData) => {
    try {
        const response = await axios.post(API_URL + 'login', userData);

        if (response.data) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        throw error;
    }
};

const logout = () =>{
    localStorage.removeItem('user');
}

const authService = {
    register, 
    logout, 
    login
};

export default authService;
