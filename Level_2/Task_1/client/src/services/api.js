import axios from 'axios';

const API_BASE_URL = 'https://your-api-base-url.com'; 

const api = axios.create({
  baseURL: API_BASE_URL,
});

const endpoints = {
  jobs: '/jobs',
  featuredJobs: '/jobs/featured',
  searchJobs: '/jobs/search',
  jobDetails: (jobId) => `/jobs/${jobId}`,
  applyJob: (jobId) => `/jobs/${jobId}/apply`,
  employerDetails: '/employers/me',
  employerJobs: '/jobs/employer',
  candidateDetails: '/candidates/me',
  candidateApplications: '/applications/candidate',
};

const apiMethods = {
  getJobs: () => api.get(endpoints.jobs),
  getFeaturedJobs: () => api.get(endpoints.featuredJobs),
  searchJobs: (term) => api.get(`${endpoints.jobs}/search?term=${term}`),
  getJobDetails: (jobId) => api.get(endpoints.jobDetails(jobId)),
  applyForJob: (jobId, formData) => api.post(endpoints.applyJob(jobId), formData),
  getEmployerDetails: () => api.get(endpoints.employerDetails),
  getEmployerJobs: () => api.get(endpoints.employerJobs),
  getCandidateDetails: () => api.get(endpoints.candidateDetails),
  getCandidateApplications: () => api.get(endpoints.candidateApplications),

};

export { api, apiMethods };
