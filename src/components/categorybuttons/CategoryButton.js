import React from 'react';
import './CategoryButton.css'

const CategoryButton = ({ image, label, link }) => {
  return (
    <>

      <a href={link} className="category-button" style={styles.button}>
      <div style={styles.imageContainer}>
        <img src={image} alt={label} style={styles.image} />
      </div>
      <p style={styles.label}>{label}</p>
      
    </a>
    
    </>
    
  );
};

const styles = {
  button: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'black',
    margin: '20px',
  },
  imageContainer: {
    backgroundColor: '#eaf6ff', // Blue background color
    borderRadius: '50%', // Makes the container round
    padding: '20px', // Adds space around the image
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    // borderRadius: '50%', // Makes the image itself round
    width: '80px',
    height: '80px',
    objectFit: 'cover',
  },
  label: {
    marginTop: '10px',
    fontSize: '16px',
    textAlign: 'center',
  },
};

export default CategoryButton;
  