import React from "react";
import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import AdjustIcon from "@mui/icons-material/Adjust";
import PeopleIcon from "@mui/icons-material/People";
import "./card.css";

function CarDetails({ car }) {
  return (
    <div className="car-details">
      <DetailItem icon={<LocalGasStationIcon />} text={car.fuel} />
      <DetailItem icon={<AdjustIcon />} text={car.transmission} />
      <DetailItem icon={<PeopleIcon />} text={car.capacity} />
    </div>
  );
}

function DetailItem({ icon, text }) {
  return (
    <div className="car-detail-item">
      {icon}
      <span>{text}</span>
    </div>
  );
}

function FavoriteButton({ isLiked, onClick }) {
  return (
    <IconButton
      onClick={onClick}
      className={`favorite-car ${isLiked ? "liked" : "unliked"}`}
    >
      {isLiked ? (
        <FavoriteIcon style={{ color: "red" }} />
      ) : (
        <FavoriteBorderIcon />
      )}
    </IconButton>
  );
}

function Card({ car, toggleFavorite, favorites }) {
  const navigate = useNavigate();
  const isLiked = favorites.includes(car.id);

  const handleToggleFavorite = (e) => {
    e.stopPropagation();
    toggleFavorite(car.id); //
  };

  const handleImageClick = () => navigate(`/cars/${car.id}`);

  return (
    <div className="car-card">
      <FavoriteButton isLiked={isLiked} onClick={handleToggleFavorite} />
      <h2 className="car-name">{car.name}</h2>
      <p className="car-type">{car.type}</p>
      <img
        src={require(`../../assets/${car.image}`)}
        alt={car.name}
        className="car-image"
        onClick={handleImageClick}
        style={{ cursor: "pointer" }}
      />
      <CarDetails car={car} />
      <div className="car-price-container">
        <div className="car-price">
          <span className="car-price-value">
            ${car.pricePerDay.toFixed(2)}/
          </span>
          <span className="car-price-unit">day</span>
        </div>
        <button className="rent-button" onClick={(e) => e.stopPropagation()}>
          Rent Now
        </button>
      </div>
    </div>
  );
}

export default Card;
