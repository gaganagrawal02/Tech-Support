import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

const LocationSearch = () => {
  const [location, setLocation] = useState('Noida');
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
      { name: 'Laptop', category: 'Gadgets', link: '/upgrade' },
      { name: 'Tablet', category: 'Gadgets', link: '/desktop-repair' },
      { name: 'Laptop', category: 'Gadgets', link: '/windows-repair' },
    ]);
    setShowResults(true);
  };

  return (

      

      <div style={styles.container}>
        <div style={styles.searchBar}>
          <div style={styles.location}>
            <span style={styles.locationIcon}><FaMapMarkerAlt /></span>
            <select value={location} onChange={handleLocationChange} style={styles.locationSelect}>
              <option value="Noida">Noida</option>
              <option value="New Delhi">New Delhi</option>
              <option value="Ghaziabad">Ghaziabad</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Type to search"
            value={query}
            onChange={handleSearch}
            style={styles.input}
          />
          <button style={styles.searchButton}><CiSearch /></button>
        </div>
        {showResults && (
          <div style={styles.results}>
            {results.map((result, index) => (
              <Link 
                key={index}
                to={result.link} 
                style={styles.resultLink}
              >
                <div style={styles.resultItem}>
                  <span>{result.name}</span>
                  <span style={styles.category}>{result.category}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

  );
};

const styles = {

 
  container: {
    position: 'relative',
    width: '80%',
    maxWidth: '600px',
    margin: 'auto',
   
    padding: '10px',
    marginTop:'-30px',
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
    width: '100%',
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
  resultLink: {
    textDecoration: 'none',
    color: 'black', // Ensures the link color does not change
  },
  category: {
    color: 'orange',
  },

  // Mobile responsive styles
  '@media (max-width: 768px)': {
    searchBar: {
      flexDirection: 'column',
      alignItems: 'stretch',
      padding: '10px',
    },
    location: {
      marginBottom: '10px',
      width: '100%',
    },
    input: {
      marginBottom: '10px',
    },
    searchButton: {
      marginBottom: '10px',
    },
    results: {
      top: '110px',
    },
    resultItem: {
      padding: '10px',
      fontSize: '14px',
    },
  },
};

export default LocationSearch;
