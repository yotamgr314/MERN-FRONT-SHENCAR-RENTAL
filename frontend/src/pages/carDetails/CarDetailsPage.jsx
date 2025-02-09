import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./CarDetailsPage.css";
import { Favorite } from "@mui/icons-material";

function CarDetailsPage({ favorites, toggleFavorite, carsData }) {
  const { id } = useParams();
  const car = carsData.find((c) => c.id === parseInt(id));
  const [mainImage, setMainImage] = useState(car.images[0]);
  const isFavorite = favorites.includes(car.id);

  if (!car) {
    return <div className="error">Car not found</div>;
  }

  return (
    <div className="car-details-page">
      <h1 className="page-title">Car Details</h1>
      <div className="content-container">
        <div className="left-section">
          <div className="main-box">
            <h2 className="main-title">
              Sports car with the best design and acceleration
            </h2>
            <p className="main-description">
              Safety and comfort while driving a futuristic and elegant sports
              car.
            </p>
            <img
              src={"../assets/" + mainImage}
              alt={car.name}
              className="main-image"
            />
          </div>

          <div className="small-box-container">
            <div
              className="firstbox"
              onClick={() => setMainImage(car.images[0])}
            >
              <div className="small-box first">
                <img
                  src={"../assets/" + car.images[0]}
                  alt={car.name}
                  className="first"
                />
              </div>
            </div>

            {car.images.slice(1).map((image, index) => (
              <div
                key={index}
                className="small-box"
                onClick={() => setMainImage(image)}
              >
                <img
                  src={"../assets/" + image}
                  alt={`${car.name} ${index + 1}`}
                  className="thumbnail"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="right-section">
          <button
            className="heart-button-details"
            onClick={() => toggleFavorite(car.id)}
          >
            <Favorite
              style={{
                fontSize: 20,
                color: isFavorite ? "#ED3F3F" : "#596780",
              }}
            />
          </button>

          <h2 className="car-name">{car.name}</h2>

          <div className="rating">
            {Array.from({ length: 5 }).map((_, index) =>
              index < Math.floor(car.rating) ? (
                <Favorite
                  key={index}
                  style={{
                    fontSize: 18,
                    color: "#FBAD39",
                  }}
                />
              ) : (
                <Favorite
                  key={index}
                  style={{
                    fontSize: 18,
                    color: "gray",
                  }}
                />
              )
            )}
            <span className="reviews">{car.reviews} Reviews</span>
          </div>

          <p className="car-description">
            {car.description || "Luxury, speed, and power combined."}
          </p>

          <div className="specs">
            <div className="spec-item">
              <span>Type Car:</span> <p>{car.type}</p>
            </div>
            <div className="spec-item">
              <span>Steering:</span> <p>{car.transmission}</p>
            </div>
            <div className="spec-item">
              <span>Capacity:</span> <p>{car.capacity} Person</p>
            </div>
            <div className="spec-item">
              <span>Gasoline:</span> <p>{car.fuelCapacity}L</p>
            </div>
          </div>

          <div className="price-sectiondet">
            ${car.pricePerDay.toFixed(2)}/day
          </div>
          <button className="rent-button">Rent Now</button>
        </div>
      </div>
    </div>
  );
}

export default CarDetailsPage;
