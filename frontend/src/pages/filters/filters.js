import React from "react";
import FilterTypes from "./filterTypes";
import FilterCapacity from "./filterCapacity";
import FilterPrice from "./filterPrice";
import "./filters.css";

function Filters({ carsData, filters, setFilters, minPrice, maxPrice }) {
  return (
    <div className="filters-container">
      <FilterTypes
        carsData={carsData}
        filters={filters}
        setFilters={setFilters}
      />
      <FilterCapacity
        carsData={carsData}
        filters={filters}
        setFilters={setFilters}
      />
      <FilterPrice
        filters={filters}
        setFilters={setFilters}
        minPrice={minPrice}
        maxPrice={maxPrice}
      />
    </div>
  );
}

export default Filters;
