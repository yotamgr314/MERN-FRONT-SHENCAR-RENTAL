import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";

function FilterTypes({ carsData, filters = {}, setFilters }) {
  const uniqueTypes = [...new Set(carsData.map((car) => car.type))];

  // הגדרת filters.types כברירת מחדל אם הוא לא מוגדר
  const safeFilters = {
    types: filters.types || uniqueTypes, // תמיד יהיה מערך של סוגי רכבים
  };

  const handleTypeChange = (type) => {
    if (safeFilters.types.length === 1 && safeFilters.types.includes(type))
      return;

    const updatedTypes = safeFilters.types.includes(type)
      ? safeFilters.types.filter((t) => t !== type)
      : [...safeFilters.types, type];

    setFilters((prevFilters) => ({ ...prevFilters, types: updatedTypes }));
  };

  return (
    <div className="filter-section">
      <h6>TYPE</h6>
      {uniqueTypes.map((type) => (
        <FormControlLabel
          key={type}
          control={
            <Checkbox
              checked={safeFilters.types.includes(type)}
              onChange={() => handleTypeChange(type)}
            />
          }
          label={type}
        />
      ))}
    </div>
  );
}

export default FilterTypes;
