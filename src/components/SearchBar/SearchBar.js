import React, { useState } from 'react';

const SearchBar = () => {
  const [location, setLocation] = useState('PATHANKOT');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);
    // Simulate fetching data
    setResults([
      { name: 'Mobile Phone', category: 'Gadgets' },
      { name: 'Tablet', category: 'Gadgets' },
      { name: 'Laptop', category: 'Gadgets' },
    ]);
    setShowResults(true);
  };

  return (
    <div style={styles.container}>
      <div style={styles.searchBar}>
        <div style={styles.location}>
          <span style={styles.locationIcon}>📍</span>
          <select value={location} onChange={handleLocationChange} style={styles.locationSelect}>
            <option value="PATHANKOT">PATHANKOT</option>
            <option value="AMRITSAR">AMRITSAR</option>
            <option value="JALANDHAR">JALANDHAR</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Type to search"
          value={query}
          onChange={handleSearch}
          style={styles.input}
        />
        <button style={styles.searchButton}>🔍</button>
      </div>
      {showResults && (
        <div style={styles.results}>
          {results.map((result, index) => (
            <div key={index} style={styles.resultItem}>
              <span>{result.name}</span>
              <span style={styles.category}>{result.category}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    width: '600px',
    margin: 'auto',
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '25px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    padding: '10px',
  },
  location: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '10px',
  },
  locationIcon: {
    marginRight: '5px',
  },
  locationSelect: {
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  input: {
    flex: 1,
    border: 'none',
    outline: 'none',
    padding: '10px',
    borderRadius: '25px',
    fontSize: '16px',
  },
  searchButton: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  results: {
    position: 'absolute',
    top: '60px',
    left: '0',
    right: '0',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    borderRadius: '5px',
    overflow: 'hidden',
    zIndex: 10,
  },
  resultItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px',
    borderBottom: '1px solid #eee',
  },
  category: {
    color: 'orange',
  },
};

export default SearchBar;
