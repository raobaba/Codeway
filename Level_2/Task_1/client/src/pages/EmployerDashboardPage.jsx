import React, { useEffect, useState } from 'react';
import EmployerDashboard from '../components/EmployerDashboard';
import Notifications from '../components/Notifications';
import { api } from '../services/api';

const EmployerDashboardPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [employer, setEmployer] = useState(null);

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

    fetchEmployerDetails();
  }, []);

  const handleNotification = (notification) => {
    setNotifications((prevNotifications) => [...prevNotifications, notification]);
  };

  return (
    <div className="employer-dashboard-page">
      <h2>Employer Dashboard</h2>

      <Notifications notifications={notifications} />

      {employer ? (
        <EmployerDashboard employer={employer} onPostJobSuccess={handleNotification} />
      ) : (
        <p>Loading employer details...</p>
      )}
    </div>
  );
};

export default EmployerDashboardPage;
