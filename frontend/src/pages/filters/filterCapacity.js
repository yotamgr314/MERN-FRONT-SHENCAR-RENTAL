import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";

function FilterCapacity({ carsData, filters = {}, setFilters }) {
  const uniqueCapacities = [...new Set(carsData.map((car) => car.capacity))];

  // יצירת אובייקט בטוח למניעת שגיאות
  const safeFilters = {
    capacities: filters.capacities || uniqueCapacities, // ברירת מחדל אם `filters.capacities` אינו מוגדר
  };

  const handleCapacityChange = (capacity) => {
    if (
      safeFilters.capacities.length === 1 &&
      safeFilters.capacities.includes(capacity)
    )
      return; // מונע הסרה של הבחירה האחרונה

    const updatedCapacities = safeFilters.capacities.includes(capacity)
      ? safeFilters.capacities.filter((c) => c !== capacity)
      : [...safeFilters.capacities, capacity];

    setFilters((prevFilters) => ({
      ...prevFilters,
      capacities: updatedCapacities,
    }));
  };

  return (
    <div className="filter-section">
      <h6>CAPACITY</h6>
      {uniqueCapacities.map((capacity) => (
        <FormControlLabel
          key={capacity}
          control={
            <Checkbox
              checked={safeFilters.capacities.includes(capacity)}
              onChange={() => handleCapacityChange(capacity)}
            />
          }
          label={`${capacity} Seats`}
        />
      ))}
    </div>
  );
}

export default FilterCapacity;
