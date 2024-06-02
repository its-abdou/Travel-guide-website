import React from "react";
import "./FilterAside.css";

const FilterAside = ({ selectedStars, setSelectedStars }) => {
  const handleCheckboxChange = (star) => {
    if (selectedStars.includes(star)) {
      setSelectedStars(selectedStars.filter((item) => item !== star));
    } else {
      setSelectedStars([...selectedStars, star]);
    }
  };

  return (
    <div className="star-filter">
      <h2>Filter by:</h2>
      <h3>Star rating</h3>
      {[5, 4, 3, 2, 1].map((star) => (
        <div key={star} className="star-filter-item">
          <input
            type="checkbox"
            id={`star-${star}`}
            checked={selectedStars.includes(star)}
            onChange={() => handleCheckboxChange(star)}
          />
          <label htmlFor={`star-${star}`}>
            {star} Star{star > 1 && "s"}
          </label>
        </div>
      ))}
    </div>
  );
};

export default FilterAside;
