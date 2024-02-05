import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <div className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="navbar-left">
        Job
      </div>
      <button className="toggle-btn" onClick={toggleNavbar}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <div className="navbar-right">
          <Link to="/" onClick={closeNavbar}>
            Home
          </Link>
          <Link to="/job-listings" onClick={closeNavbar}>
            Job Listings
          </Link>
          <Link to="/employer-dashboard" onClick={closeNavbar}>
            Employer Dashboard
          </Link>
          <Link to="/candidate-dashboard" onClick={closeNavbar}>
            Candidate Dashboard
          </Link>
          <Link to="/login" onClick={closeNavbar}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
