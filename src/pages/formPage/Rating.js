import React, { useState } from "react";
import { FaStar } from 'react-icons/fa';

const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            className={`star ${starValue <= rating ? 'active' : ''}`}
            onClick={() => handleRatingChange(starValue)}
          >
            <FaStar size={40} style={{ color: starValue <= rating ? '	#FFC000' : 'gray' }} />
          </span>
        );
      })}
      <p className="mx-4 mt-2 fw-medium">Selected rating: {rating}</p>
    </div>
  );
};

export default Rating;
