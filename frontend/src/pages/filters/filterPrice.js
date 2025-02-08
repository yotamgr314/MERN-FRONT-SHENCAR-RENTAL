import React from "react";
import { Slider } from "@mui/material";

function FilterPrice({ filters = {}, setFilters, minPrice, maxPrice }) {
  const safeFilters = {
    maxPrice: filters.maxPrice !== undefined ? filters.maxPrice : maxPrice,
  };

  const handlePriceChange = (e, newValue) => {
    setFilters((prevFilters) => ({ ...prevFilters, maxPrice: newValue }));
  };

  return (
    <div className="filter-section price-filter">
      <h6>PRICE (PER DAY)</h6>
      <Slider
        value={safeFilters.maxPrice}
        onChange={handlePriceChange}
        min={minPrice}
        max={maxPrice}
        valueLabelDisplay="auto"
      />
      <span>Max: ${safeFilters.maxPrice}</span>
    </div>
  );
}

export default FilterPrice;
