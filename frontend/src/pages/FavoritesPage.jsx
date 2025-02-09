import React from "react";
import CarList from "../components/CarList/CarList";

function FavoritesPage({ cars, favorites, toggleFavorite }) {
  const favoriteCars = cars.filter((car) => favorites.includes(car.id));

  return (
    <div className="home-container">
      <header className="catalog-header">
        <h1>Favorites</h1>
        <p>{favoriteCars.length} Cars</p>
      </header>
      <CarList
        cars={favoriteCars}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
}

export default FavoritesPage;
