import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { api } from '../services/api';
import '../styles/EmployerDashboard.css'

const EmployerDashboard = () => {
  const [employer, setEmployer] = useState(null);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch employer details from the API
    const fetchEmployerDetails = async () => {
      try {
        const response = await api.get('/employers/me');
        setEmployer(response.data);
      } catch (error) {
        console.error('Error fetching employer details:', error);
      }
    };

    // Fetch jobs posted by the employer
    const fetchEmployerJobs = async () => {
      try {
        const response = await api.get('/jobs/employer');
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching employer jobs:', error);
      }
    };

    fetchEmployerDetails();
    fetchEmployerJobs();
  }, []);

  return (
    <div className="employer-dashboard">
      {employer ? (
        <>
          <h2>Welcome, {employer.companyName}!</h2>
          <p>Email: {employer.email}</p>

          <h3>Your Job Postings</h3>
          {jobs.length === 0 ? (
            <p>No jobs posted yet.</p>
          ) : (
            <ul>
              {jobs.map((job) => (
                <li key={job.id}>
                  <Link to={`/job/${job.id}`}>{job.title}</Link>
                </li>
              ))}
            </ul>
          )}

          <Link to="/post-job">
            <button>Post a New Job</button>
          </Link>
        </>
      ) : (
        <p>Loading employer details...</p>
      )}
    </div>
  );
};

export default EmployerDashboard;
