import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { api } from '../services/api';

const JobDetail = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    // Fetch job details from the API using the job ID
    const fetchJobDetail = async () => {
      try {
        const response = await api.get(`/jobs/${jobId}`);
        setJob(response.data);
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    };

    fetchJobDetail();
  }, [jobId]);

  return (
    <div className="job-detail">
      {job ? (
        <>
          <h2>{job.title}</h2>
          <p>{job.company}</p>
          <p>{job.location}</p>
          <p>{job.description}</p>
          <p>Posted on: {job.postedDate}</p>
          <button>Apply Now</button>
        </>
      ) : (
        <p>Loading job details...</p>
      )}
    </div>
  );
};

export default JobDetail;
