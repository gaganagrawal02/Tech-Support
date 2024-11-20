import React from 'react';
import CategoryButton from './CategoryButton';
import Desktop from '../Assets/Desktop.png';
import Laptop from '../Assets/Laptop.png';
import Coding  from '../Assets/coding-issue.png';
import Macbook from '../Assets/Macbook-icon.png';
import Printer from '../Assets/Printer.png';
import Subscription from '../Assets/subscription.png';
import Tech from '../Assets/Tech-support.png';

const categories = [
  { image: Desktop, label: 'Desktop', link: '#' },
  { image: Laptop, label: 'Laptop', link: '#' },
  { image: Coding , label: 'Coding issue', link: '#' },
  { image: Macbook, label: 'Macbook', link: '#' },
  { image: Printer, label: 'Printer', link: '#' },
  { image: Subscription, label: 'Subscription', link: '#' },
  { image: Tech, label: 'Tech-support', link: '#' },
];

const CategorySection = () => {
  return (
    <div style={styles.container}>
      {categories.map((category, index) => (
        <CategoryButton
          key={index}
          image={category.image}
          label={category.label}
          link={category.link}
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
  },
};

export default CategorySection;
