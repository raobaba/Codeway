import React, { useEffect, useState } from 'react';
import CandidateDashboard from '../components/CandidateDashboard';
import Notifications from '../components/Notifications';
import { api } from '../services/api';

const CandidateDashboardPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [candidate, setCandidate] = useState(null);

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

    fetchCandidateDetails();
  }, []);

  const handleNotification = (notification) => {
    setNotifications((prevNotifications) => [...prevNotifications, notification]);
  };

  return (
    <div className="candidate-dashboard-page">
      <h2>Candidate Dashboard</h2>

      <Notifications notifications={notifications} />

      {candidate ? (
        <CandidateDashboard candidate={candidate} />
      ) : (
        <p>Loading candidate details...</p>
      )}
    </div>
  );
};

export default CandidateDashboardPage;
