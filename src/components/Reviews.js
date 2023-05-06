import React, { useState } from 'react';
import './Review.css';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setReviews([...reviews, { name, rating, comment }]);
    setName('');
    setRating('');
    setComment('');
  };

  return (
    <section className="reviews">
      <h2>Reviews</h2>
      <div className="review-form-container">
        <h3>Write a review</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} required />
          </div>
          <div>
            <label htmlFor="rating">Rating:</label>
            <input type="number" id="rating" min="1" max="5" value={rating} onChange={(event) => setRating(event.target.value)} required />
          </div>
          <div>
            <label htmlFor="comment">Comment:</label>
            <textarea id="comment" value={comment} onChange={(event) => setComment(event.target.value)} required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="reviews-list">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="review">
              <h3>{review.name}</h3>
              <p>Rating: {review.rating}</p>
              <p>{review.comment}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </section>
  );
}

export default Reviews;
