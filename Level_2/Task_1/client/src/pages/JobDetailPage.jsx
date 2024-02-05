import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JobDetail from '../components/JobDetail';
import JobApplicationForm from '../components/JobApplicationForm';
import Notifications from '../components/Notifications';
import { api } from '../services/api';

const JobDetailPage = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [notifications, setNotifications] = useState([]);

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

  const handleNotification = (notification) => {
    setNotifications((prevNotifications) => [...prevNotifications, notification]);
  };

  return (
    <div className="job-detail-page">
      <h2>Job Details</h2>

      <Notifications notifications={notifications} />

      {job ? (
        <>
          <JobDetail job={job} />

          <h3>Apply for this Job</h3>
          <JobApplicationForm jobId={jobId} onSuccess={handleNotification} />
        </>
      ) : (
        <p>Loading job details...</p>
      )}
    </div>
  );
};

export default JobDetailPage;
