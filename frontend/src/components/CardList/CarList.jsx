import React from "react";
import CarCard from "../Car/CarCard";
import "./CarList.css"; // ניצור את הקובץ בהמשך

function CarList({ cars, favorites, toggleFavorite }) {
  return (
    <div className="car-grid">
      {cars.length === 0 ? (
        <p className="no-cars">No cars found.</p>
      ) : (
        cars.map((car) => (
          <CarCard
            key={car.id}
            car={car}
            isFavorite={favorites.includes(car.id)}
            toggleFavorite={toggleFavorite}
          />
        ))
      )}
    </div>
  );
}

export default CarList;
