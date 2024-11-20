import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { FaSearch, FaChevronDown, FaLocationArrow } from 'react-icons/fa';
import './HeroSection.css';

const states = [
  { name: 'Maharashtra', cities: ['Mumbai', 'Pune', 'Nagpur'] },
  { name: 'Karnataka', cities: ['Bengaluru', 'Mysuru', 'Hubli'] },
  // Add more states and cities as needed
];

const HeroSection = () => {
  const [service, setService] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedResult, setSelectedResult] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [currentIndex, setCurrentIndex] = useState(0);

  const dropdownRef = useRef(null);

  const desktopImages = [
    '/images/Slide1.webp',
    '/images/Slide2.webp',
    '/images/Slide3.webp',
    '/images/Slide4.webp',
  ];

  const mobileImages = [
    '/images/mobilebanner.jpg',
    '/images/mobile2.webp',
    '/images/mobile3.webp',
    '/images/mobile4.webp',
  ];

  const images = isMobile ? mobileImages : desktopImages;

  // Update cities when state changes
  useEffect(() => {
    const selectedState = states.find(s => s.name === state);
    if (selectedState) {
      setCities(selectedState.cities);
    } else {
      setCities([]);
    }
  }, [state]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (value) => {
    setQuery(value);
    // Dummy data for search results
    const dummyResults = [
      { name: 'Desktop Support', category: 'Support' },
      { name: 'Laptop Support', category: 'Support' },
      { name: 'MacBook Support', category: 'Support' },
      { name: 'Printer Support', category: 'Support' },
      { name: 'Coding Issue', category: 'Issue' },
      { name: 'Server Issue', category: 'Issue' },
    ];
    setResults(dummyResults);
    setShowResults(true);
  };

  const handleResultClick = (result) => {
    setSelectedResult(result);
    setQuery(result.name); // Update query with selected result
    setShowResults(false); // Close dropdown
  };

  // Function to automatically move to the next slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [images]);

  // Detect screen size changes and update isMobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  return (
    <div className="hero-section">
      <Slider {...settings} className="image-slider">
        {images.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide} alt={`Slide ${index + 1}`} className="slide-image" />
          </div>
        ))}
      </Slider>
      <div className="search-bar">
        <div
          className="location-container"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <FaLocationArrow size={24} color="orange" />
          <span className="location-text">{city ? `${city}, ${state}` : 'Select Location'}</span>
          <FaChevronDown size={20} color="black" />
        </div>
        <div style={styles.container}>
          <input
            type="text"
            placeholder="Type to search"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            style={styles.input}
          />
          <button className="search-button" onClick={() => handleSearch(query)}>
            <FaSearch size={24} color="black" />
          </button>
          {showResults && (
            <div ref={dropdownRef} style={styles.results}>
              {results.map((result, index) => (
                <div
                  key={index}
                  style={styles.resultItem}
                  onClick={() => handleResultClick(result)}
                >
                  <span>{result.name}</span>
                  <span style={styles.category}>{result.category}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        {dropdownOpen && (
          <div className="dropdown">
            {!state ? (
              <div>
                <h2>Select State:</h2>
                <ul>
                  {states.map((item) => (
                    <li
                      key={item.name}
                      onClick={() => setState(item.name)}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div>
                <h2>Select City:</h2>
                <ul>
                  {cities.map((item) => (
                    <li
                      key={item}
                      onClick={() => {
                        setCity(item);
                        setDropdownOpen(false); // Close dropdown after selecting a city
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    width: '600px',
    margin: 'auto',
  },
  input: {
    flex: 1,
    fontSize: '16px',
    flex: '2',
    height: '40px',
    border: 'none',
    backgroundColor: 'transparent',
    fontSize: '16px',
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
    cursor: 'pointer',
  },
  category: {
    color: 'orange',
  },
};

export default HeroSection;
