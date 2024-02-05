import React, { useState } from 'react';
import '../styles/SearchBar.css'

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    
    // Pass the search term to the parent component
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for jobs..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
