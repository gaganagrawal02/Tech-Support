import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { getRecentPosts, getSimilarPosts } from '../Service/fetchPosts';
import './Blog.css'; // Import CSS file for styling

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const result = slug
          ? await getSimilarPosts(categories.map(cat => cat.slug), slug)
          : await getRecentPosts();
        setRelatedPosts(result);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [slug, categories]);

  const handlePostClick = (postSlug) => {
    navigate(`/post/${postSlug}`); // Navigate to the post detail page
  };

  return (
    <div className="PostWidget">
      <h3>{slug ? 'Related Posts' : 'Recent Posts'}</h3>
      {relatedPosts.length > 0 ? (
        relatedPosts.map((post) => (
          <div
            key={post.slug}
            className="post-item"
            onClick={() => handlePostClick(post.slug)} // Add onClick handler
          >
            <div className="w-16 flex-none">
            </div>
            <div className="post-text">
              <h3>{post.title}</h3>
            </div>
          </div>
        ))
      ) : (
        <p>No related posts available.</p>
      )}
    </div>
  );
};

export default PostWidget;
