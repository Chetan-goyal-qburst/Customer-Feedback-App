import React, { useState } from 'react';

export default function Rating() {
  const numStars = 5;
  const [selectedRating, setSelectedRating] = useState(null);

  const handleRatingChange = (event) => {
    const selectedRating = parseInt(event.target.value);
    setSelectedRating(selectedRating);
  };

  return (
    <div className="rating-container">
      {Array.from({ length: numStars }, (_, index) => index + 1).map((ratingValue) => (
        <label key={ratingValue} className={`star-label ${ratingValue <= selectedRating ? 'star-selected' : ''}`}>
          <span className="star-icon">★</span>
          <input
            type="radio"
            name="rating"
            value={ratingValue}
            className="star-input"
            onChange={handleRatingChange}
          />
        </label>
      ))}
    </div>
  );
}
