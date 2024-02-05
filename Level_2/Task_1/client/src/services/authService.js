import axios from 'axios';

const API_BASE_URL = 'https://your-auth-api-base-url.com'; 

const authApi = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

const authService = {
  register: async (userData) => {
    try {
      const response = await authApi.post('/register', userData);
      return response.data;
    } catch (error) {
      console.error('Error during registration:', error);
      throw error;
    }
  },

  login: async (email, password) => {
    try {
      const response = await authApi.post('/login', { email, password });
      return response.data;
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  },

  logout: async () => {
    try {
      const response = await authApi.post('/logout');
      return response.data;
    } catch (error) {
      console.error('Error during logout:', error);
      throw error;
    }
  },

};

export default authService;
