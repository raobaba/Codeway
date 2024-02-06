import React, { useState,useEffect } from 'react';
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
  useEffect(() => {
    const handleResize = () => {
      // Close the navbar if the screen size is greater than 600px
      if (window.innerWidth > 600) {
        setIsOpen(false);
      }
    };

    // Attach the event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return (
    <div className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="navbar-left" onClick={closeNavbar}>
        Codeway
      </div>
      <button className={`toggle-btn ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
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
