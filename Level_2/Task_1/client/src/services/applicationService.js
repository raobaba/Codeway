import axios from 'axios';

const API_BASE_URL = 'https://your-application-api-base-url.com'; 

const applicationApi = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

const applicationService = {
  getCandidateApplications: async () => {
    try {
      const response = await applicationApi.get('/applications/candidate');
      return response.data;
    } catch (error) {
      console.error('Error fetching candidate applications:', error);
      throw error;
    }
  },

  updateApplicationStatus: async (applicationId, newStatus) => {
    try {
      const response = await applicationApi.patch(`/applications/${applicationId}`, { status: newStatus });
      return response.data;
    } catch (error) {
      console.error('Error updating application status:', error);
      throw error;
    }
  },

  getApplicationDetails: async (applicationId) => {
    try {
      const response = await applicationApi.get(`/applications/${applicationId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching application details:', error);
      throw error;
    }
  },

};

export default applicationService;
