import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { api } from '../services/api';
import '../styles/CandidateDashboard.css'

const CandidateDashboard = () => {
  const [candidate, setCandidate] = useState(null);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // Fetch candidate details from the API
    const fetchCandidateDetails = async () => {
      try {
        const response = await api.get('/candidates/me');
        setCandidate(response.data);
      } catch (error) {
        console.error('Error fetching candidate details:', error);
      }
    };

    const fetchCandidateApplications = async () => {
      try {
        const response = await api.get('/applications/candidate');
        setApplications(response.data);
      } catch (error) {
        console.error('Error fetching candidate applications:', error);
      }
    };

    fetchCandidateDetails();
    fetchCandidateApplications();
  }, []);

  return (
    <div className="candidate-dashboard">
      {candidate ? (
        <>
          <h2>Welcome, {candidate.fullName}!</h2>
          <p>Email: {candidate.email}</p>

          <h3>Your Job Applications</h3>
          {applications.length === 0 ? (
            <p>No job applications submitted yet.</p>
          ) : (
            <ul>
              {applications.map((application) => (
                <li key={application.id}>
                  <Link to={`/job/${application.job.id}`}>{application.job.title}</Link>
                  <p>Status: {application.status}</p>
                </li>
              ))}
            </ul>
          )}

          <Link to="/edit-profile">
            <button>Edit Profile</button>
          </Link>
        </>
      ) : (
        <p>Loading candidate details...</p>
      )}
    </div>
  );
};

export default CandidateDashboard;
