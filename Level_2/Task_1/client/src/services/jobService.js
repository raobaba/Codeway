import axios from 'axios';

const API_BASE_URL = 'https://your-job-api-base-url.com';

const jobApi = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, 
});

const jobService = {
  getJobs: async () => {
    try {
      const response = await jobApi.get('/jobs');
      return response.data;
    } catch (error) {
      console.error('Error fetching job listings:', error);
      throw error;
    }
  },

  getFeaturedJobs: async () => {
    try {
      const response = await jobApi.get('/jobs/featured');
      return response.data;
    } catch (error) {
      console.error('Error fetching featured jobs:', error);
      throw error;
    }
  },

  searchJobs: async (searchTerm) => {
    try {
      const response = await jobApi.get(`/jobs/search?term=${searchTerm}`);
      return response.data;
    } catch (error) {
      console.error('Error searching for jobs:', error);
      throw error;
    }
  },

  getJobDetails: async (jobId) => {
    try {
      const response = await jobApi.get(`/jobs/${jobId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching job details:', error);
      throw error;
    }
  },

  postJob: async (jobData) => {
    try {
      const response = await jobApi.post('/jobs', jobData);
      return response.data;
    } catch (error) {
      console.error('Error posting a new job:', error);
      throw error;
    }
  },

  applyForJob: async (jobId, formData) => {
    try {
      const response = await jobApi.post(`/jobs/${jobId}/apply`, formData);
      return response.data;
    } catch (error) {
      console.error('Error applying for the job:', error);
      throw error;
    }
  },

};

export default jobService;
