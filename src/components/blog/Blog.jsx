import React, { useEffect, useState } from 'react';
import { fetchPosts, fetchCategories, fetchPostsByCategory } from '../Service/fetchPosts'; // Import necessary functions
import PostCard from './PostCard';
import PostWidget from './PostWidget';
import CategoryWidget from './CategoryWidget';
import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';
import Banner from './BlogBanner';
import './Blog.css';
import Footer from '../Footer/Footer';
import Cart from '../Cartpage/Cart';
import { Helmet } from 'react-helmet-async';


const Blog = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // const [cartItems, setCartItems] = useState([]);


  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      const fetchedCategories = await fetchCategories();
      setCategories(fetchedCategories);
    };

    getCategories();
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      if (selectedCategory) {
        const fetchedPosts = await fetchPostsByCategory(selectedCategory.slug);
        setPosts(fetchedPosts);
      } else {
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts);
      }
    };

    getPosts();
  }, [selectedCategory]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
    <Helmet>
      <title>Door2fy Blog - Expert Tips & Insights on Tech Services</title>
      <meta name="description" content="Discover expert tips, in-depth service insights, and the latest tech solutions on the Door2fy blog. Stay informed and enhance your digital experience." />
    </Helmet>
     <Navbar toggleCart={toggleCart} cartItemCount={0} /> {/* Set cartItemCount to 0 for empty cart */}
      
      {isCartOpen && (
        <Cart onClose={closeCart} />
      )}
      <Banner />
      <div className="blog-page">
        <div className="blog-container">
          <div className="blog-content">
            <div className="postCard">
              {posts.length > 0 ? (
                posts.map((post) => <PostCard key={post.node.slug} post={post} />)
              ) : (
                <p>No posts available.</p>
              )}
            </div>
          </div>
          <div className="sidebar">
            <CategoryWidget categories={categories} onSelectCategory={handleCategorySelect} />
            <PostWidget />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Blog;

