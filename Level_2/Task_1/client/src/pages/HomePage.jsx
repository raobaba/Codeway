import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import JobListings from '../components/JobListings';
import Notifications from '../components/Notifications';
import { api } from '../services/api';

const HomePage = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch featured jobs from the API
    const fetchFeaturedJobs = async () => {
      try {
        const response = await api.get('/jobs/featured');
        setFeaturedJobs(response.data);
      } catch (error) {
        console.error('Error fetching featured jobs:', error);
      }
    };

    fetchFeaturedJobs();
  }, []);

  const handleSearch = async (searchTerm) => {
    // Perform a search and update the featured jobs
    try {
      const response = await api.get(`/jobs/search?term=${searchTerm}`);
      setFeaturedJobs(response.data);
    } catch (error) {
      console.error('Error searching for jobs:', error);
    }
  };

  const handleNotification = (notification) => {
    setNotifications((prevNotifications) => [...prevNotifications, notification]);
  };

  return (
    <div className="home-page">
      <h1>Welcome to the Job Board</h1>
      <p>Find your dream job with us!</p>

      <SearchBar onSearch={handleSearch} />

      <Notifications notifications={notifications} />

      <h2>Featured Job Listings</h2>
      <JobListings jobs={featuredJobs} onApplySuccess={handleNotification} />
    </div>
  );
};

export default HomePage;
