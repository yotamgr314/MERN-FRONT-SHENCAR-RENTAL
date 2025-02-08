import React, { useState } from "react";
import Header from "../header/header";
import Filters from "../filters/filters";
import CarsList from "../carsList/carsList";
import CarsData from "../../data/carsData";
import Footer from "../footer/footer";
import "./homePage.css";

function HomePage() {
  const uniqueTypes = [...new Set(CarsData.map((car) => car.type))];
  const uniqueCapacities = [...new Set(CarsData.map((car) => car.capacity))];
  const minPrice = Math.min(...CarsData.map((car) => car.pricePerDay));
  const maxPrice = Math.max(...CarsData.map((car) => car.pricePerDay));

  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    types: uniqueTypes,
    capacities: uniqueCapacities,
    maxPrice: maxPrice,
  });

  const [showFavorites, setShowFavorites] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (carId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(carId)
        ? prevFavorites.filter((id) => id !== carId)
        : [...prevFavorites, carId]
    );
  };

  return (
    <div className="app-container">
      <Header
        onSearch={setSearchQuery}
        showFavorites={showFavorites}
        setShowFavorites={setShowFavorites}
      />
      <div className="content-container">
        <Filters
          carsData={CarsData}
          filters={filters}
          setFilters={setFilters}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />
        <CarsList
          searchQuery={searchQuery}
          filters={filters}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          showFavorites={showFavorites}
        />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
