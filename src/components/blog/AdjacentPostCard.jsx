import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './AdjacentPostCard.css'; // Import the CSS file

const AdjacentPostCard = ({ post, position }) => (
  <div className="adjacent-post-card">
    <div
      className="adjacent-post-card__image"
      style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
    />
    <div className="adjacent-post-card__overlay" />
    <div className="adjacent-post-card__content">
      <p className="adjacent-post-card__date">
        {moment(post.createdAt).format('MMM DD, YYYY')}
      </p>
      <p className="adjacent-post-card__title">
        {post.title}
      </p>
    </div>
    <Link to={`/post/${post.slug}`} className="adjacent-post-card__link" />
    {position === 'LEFT' && (
      <div className="arrow-btn arrow-btn--left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </div>
    )}
    {position === 'RIGHT' && (
      <div className="arrow-btn arrow-btn--right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </div>
    )}
  </div>
);

export default AdjacentPostCard;
