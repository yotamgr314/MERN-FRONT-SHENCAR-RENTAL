import React, { useMemo, useEffect } from "react";

function Filters({
  carsData,
  selectedTypes,
  setSelectedTypes,
  selectedCapacity,
  setSelectedCapacity,
  maxPrice,
  setMaxPrice,
}) {
  // חישוב מחיר מינימום ומקסימום דינמי
  const minPrice = useMemo(
    () => Math.min(...carsData.map((car) => car.pricePerDay)),
    [carsData]
  );
  const dynamicMaxPrice = useMemo(
    () => Math.max(...carsData.map((car) => car.pricePerDay)),
    [carsData]
  );

  // הגדרת ברירות מחדל
  useEffect(() => {
    setSelectedTypes(["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"]);
    setSelectedCapacity([2, 4, 6]);
    setMaxPrice(dynamicMaxPrice);
  }, [setSelectedTypes, setSelectedCapacity, setMaxPrice, dynamicMaxPrice]);

  // שינוי סוג רכב
  const handleTypeChange = (type) => {
    if (selectedTypes.length === 1 && selectedTypes.includes(type)) {
      return;
    }
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  // שינוי מספר מושבים
  const handleCapacityChange = (capacity) => {
    setSelectedCapacity((prev) =>
      prev.includes(capacity)
        ? prev.filter((c) => c !== capacity)
        : [...prev, capacity]
    );
  };

  // שינוי מחיר
  const handlePriceChange = (e) => {
    const newPrice = Number(e.target.value);
    if (newPrice >= minPrice && newPrice <= dynamicMaxPrice) {
      setMaxPrice(newPrice);
    }
  };

  // ספירת סוגי רכבים
  const typeCounts = useMemo(() => {
    const counts = {};
    carsData.forEach((car) => {
      counts[car.type] = (counts[car.type] || 0) + 1;
    });
    return counts;
  }, [carsData]);

  // ספירת קיבולות
  const capacityCounts = useMemo(() => {
    const counts = {};
    carsData.forEach((car) => {
      counts[car.capacity] = (counts[car.capacity] || 0) + 1;
    });
    return counts;
  }, [carsData]);

  return (
    <div>
      <h4>TYPE</h4>
      <div className="filter-options type-options">
        {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map((type) => (
          <label key={type}>
            <input
              type="checkbox"
              checked={selectedTypes.includes(type)}
              onChange={() => handleTypeChange(type)}
            />
            {type} ({typeCounts[type] || 0})
          </label>
        ))}
      </div>

      <h4>CAPACITY</h4>
      <div className="filter-options capacity-options">
        {[2, 4, 6].map((capacity) => (
          <label key={capacity}>
            <input
              type="checkbox"
              checked={selectedCapacity.includes(capacity)}
              onChange={() => handleCapacityChange(capacity)}
            />
            {capacity} Person ({capacityCounts[capacity] || 0})
          </label>
        ))}
      </div>

      <h4>PRICE (PER DAY)</h4>
      <div className="price-slider">
        <input
          type="range"
          min={minPrice}
          max={dynamicMaxPrice}
          value={maxPrice}
          onChange={handlePriceChange}
        />
        <p>Max: ${maxPrice}</p>
      </div>
    </div>
  );
}

export default Filters;
