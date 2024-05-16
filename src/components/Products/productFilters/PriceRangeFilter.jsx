import React from "react";
import Slider from 'react-slider';
import "../Products.css";

const PriceRangeFilter = ({ values, MIN, MAX, onPriceRangeChange }) => {
  return (
    <div className="price-range-filter">
      <h5>Price</h5>
      <div className="values">${values[0]} - ${values[1]}</div>
      <Slider
        className="slider"
        value={values}
        min={MIN}
        max={MAX}
        onChange={onPriceRangeChange}
      />
    </div>
  );
};

export default PriceRangeFilter;
