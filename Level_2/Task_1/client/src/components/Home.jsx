import React, { useEffect, useState } from 'react';
import JobListings from '../components/JobListings';
import { api } from '../services/api';
import '../styles/Home.css'
const Home = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);

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

  return (
    <div className="home">
      <h1>Welcome to the Job Board</h1>
      <p>Find your dream job with us!</p>

      <h2>Featured Job Listings</h2>
      <JobListings jobs={featuredJobs} />
    </div>
  );
};

export default Home;
