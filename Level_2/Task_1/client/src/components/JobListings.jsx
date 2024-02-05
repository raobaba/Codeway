import React from 'react';
import '../styles/JobListings.css'

const JobListings = ({ jobs }) => {
  return (
    <div className="job-listings">
      {jobs.length === 0 ? (
        <p>No featured jobs available at the moment.</p>
      ) : (
        <ul>
          {jobs.map((job) => (
            <li key={job.id}>
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <p>{job.location}</p>
              <p>{job.description.substring(0, 150)}...</p>
              <button>View Details</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobListings;
