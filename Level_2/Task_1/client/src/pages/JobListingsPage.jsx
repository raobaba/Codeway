import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import JobListings from '../components/JobListings';
import Notifications from '../components/Notifications';
import { api } from '../services/api';

const JobListingsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch job listings from the API based on the search term
    const fetchJobListings = async () => {
      try {
        const response = await api.get(`/jobs?search=${searchTerm}`);
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching job listings:', error);
      }
    };

    fetchJobListings();
  }, [searchTerm]);

  const handleSearch = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  const handleNotification = (notification) => {
    setNotifications((prevNotifications) => [...prevNotifications, notification]);
  };

  return (
    <div className="job-listings-page">
      <h2>Job Listings</h2>

      <SearchBar onSearch={handleSearch} />

      <Notifications notifications={notifications} />

      <JobListings jobs={jobs} onApplySuccess={handleNotification} />
    </div>
  );
};

export default JobListingsPage;
