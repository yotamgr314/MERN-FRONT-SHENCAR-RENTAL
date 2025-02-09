import React, { useEffect, useState } from "react";
import CarList from "../../components/carList/CarList";
import "./HomePage.css";

function HomePage({ cars, favorites, toggleFavorite, filters, searchQuery }) {
  const { selectedTypes, selectedCapacity, maxPrice } = filters;
  const [filteredCars, setFilteredCars] = useState(cars);

  useEffect(() => {
    let updated = [...cars];

    if (selectedTypes.length > 0) {
      updated = updated.filter((c) => selectedTypes.includes(c.type));
    }
    if (selectedCapacity.length > 0) {
      updated = updated.filter((c) => selectedCapacity.includes(c.capacity));
    }
    updated = updated.filter((c) => c.pricePerDay <= maxPrice);

    if (searchQuery && searchQuery.length >= 2) {
      updated = updated.filter((c) =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredCars(updated);
  }, [cars, selectedTypes, selectedCapacity, maxPrice, searchQuery]);

  return (
    <div className="home-container">
      <header className="catalog-header">
        <h1 className="title">Cars Catalogue</h1>
        <p>{filteredCars.length} Cars</p>
      </header>

      <CarList
        cars={filteredCars}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
}

export default HomePage;
