import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import carsData from "../../data/carsData.json";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";
import "./carDetails.css";

function Car({ favorites, toggleFavorite }) {
  const { carId } = useParams();
  const car = carsData.find((car) => car.id === parseInt(carId));

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (car) {
      setIsFavorite(favorites.includes(car.id));
    }
  }, [favorites, car]);

  if (!car) {
    return <p>Car not found!</p>;
  }

  return (
    <div className="car-details-container">
      <h1 className="catalogue-title">Car Details</h1>
      <div className="car-details-left">
        <CarHighlight car={car} />
      </div>
      <div className="car-details-right">
        <CarHeader
          car={car}
          isFavorite={isFavorite}
          toggleFavorite={toggleFavorite}
        />
        <CarInfo car={car} />
        <RentSection price={car.pricePerDay} />
      </div>
    </div>
  );
}

function CarHighlight({ car }) {
  return (
    <div className="car-highlight">
      <h2 className="car-title">{car.name}</h2>
      <p className="car-subtitle">
        Safety and comfort while driving a futuristic and elegant sports car
      </p>
      <img
        className="car-main-image"
        src={require(`../../assets/${car.image}`)}
        alt={car.name}
      />
    </div>
  );
}

function CarHeader({ car, isFavorite, toggleFavorite }) {
  return (
    <div className="car-header">
      <h1 className="car-name-details">{car.name}</h1>
      <IconButton
        onClick={() => toggleFavorite(car.id)}
        className="favorite-icon"
      >
        {isFavorite ? (
          <FavoriteIcon style={{ color: "red" }} />
        ) : (
          <FavoriteBorderIcon />
        )}
      </IconButton>
    </div>
  );
}

function CarInfo({ car }) {
  return (
    <>
      <div className="rating-section">
        <Rating
          name="read-only"
          value={car.rating}
          precision={0.5}
          readOnly
          sx={{ fontSize: "20px" }}
        />
        <span className="review-count">{car.reviewCount} Reviewers</span>
      </div>
      <p className="car-description">{car.description}</p>
      <ul className="car-details-list">
        <DetailItem label="Type Car" value={car.type} />
        <DetailItem label="Capacity" value={car.capacity} />
        <DetailItem label="Steering" value={car.transmission} />
        <DetailItem label="Gasoline" value={car.fuel} />
      </ul>
    </>
  );
}

function DetailItem({ label, value }) {
  return (
    <li>
      <span>{label}</span>
      <strong>{value}</strong>
    </li>
  );
}

function RentSection({ price }) {
  return (
    <div className="rent-section">
      <div className="car-price">
        ${price.toFixed(2)} <span>/ days</span>
      </div>
      <button className="rent-now-button">Rent Now</button>
    </div>
  );
}

export default Car;
