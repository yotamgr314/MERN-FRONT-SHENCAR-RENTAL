import React from "react";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import "./CarCard.css";

const CarCard = ({ car, isFavorite, toggleFavorite }) => {
  return (
    <div className="car-card-container">
      <div className="card-header">
        <div className="title-group">
          <h3 className="car-title">{car.name}</h3>
          <p className="car-subtitle">{car.type}</p>
        </div>
        <button className="heart-button" onClick={() => toggleFavorite(car.id)}>
          <FavoriteIcon
            sx={{
              color: isFavorite ? "red" : "transparent",
              stroke: "#596780",
              strokeWidth: 2,
            }}
          />
        </button>
      </div>

      <Link to={`/cars/${car.id}`}>
        <img
          src={"assets/" + car.images[0]}
          alt={car.name}
          className="vehicle-image"
        />
      </Link>

      <div className="specs-row">
        <div className="spec-itemc fuel">
          <LocalGasStationIcon sx={{ color: "#90A3BF" }} />
          <span>{car.fuelCapacity}L</span>
        </div>

        <div className="spec-itemc transmission">
          <img
            src="/assets/icons/steering-wheel.svg"
            alt="Steering Wheel"
            width={24}
            height={24}
            style={{
              display: "inline-block",
              verticalAlign: "middle",
            }}
          />
          <span>{car.transmission}</span>
        </div>

        <div className="spec-itemc capacity">
          <img
            src="/assets/icons/people.svg" // ✅ Added people icon the same way
            alt="People"
            width={24}
            height={24}
            style={{
              display: "inline-block",
              verticalAlign: "middle",
            }}
          />
          <span>{car.capacity} People</span>
        </div>
      </div>

      <div className="card-footer">
        <div className="price-section">
          <span className="price-figure">${car.pricePerDay.toFixed(2)}</span>
          <span className="price-slash">/</span>
          <span className="price-term">day</span>
        </div>
        <button className="rental-button">Rent Now</button>
      </div>
    </div>
  );
};

export default CarCard;
