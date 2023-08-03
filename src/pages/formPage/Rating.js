import React, { useState } from "react";
import { FaStar } from 'react-icons/fa';

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [numStars, setNumStars]= useState(5);
  

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const changeStars=(e)=>{
    setNumStars(e);
    setRating(0);  
  }

  return (
    <div>
      {[...Array(numStars)].map((_, index) => {
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
  
      
      <p className="mx-4 mt-2 fw-medium" >Selected rating: {rating}</p>
      <button className="btn btn-dark mx-3" onClick={()=>changeStars(5)} > 5 star</button>
      <button className="btn btn-dark mx-3 "onClick={()=>changeStars(10)}> 10 star</button>
    </div>
  );
};

export default Rating;
