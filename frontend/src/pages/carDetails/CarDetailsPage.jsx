import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./CarDetailsPage.css";
import { Favorite } from "@mui/icons-material";

function CarDetailsPage({ favorites, toggleFavorite, carsData }) {
  const { id } = useParams();
  const car = carsData.find((c) => c.id === parseInt(id));

  // ✅ Ensure hook useState is NOT inside a conditional return
  const [mainImage, setMainImage] = useState(car ? car.images[0] : "");

  if (!car) {
    return <div className="error">Car not found</div>;
  }

  const isFavorite = favorites.includes(car.id);

  return (
    <div className="car-details-page">
      <h1 className="page-title">Car Details</h1>
      <div className="content-container">
        <div className="left-section">
          <div className="main-box">
            <h2 className="main-title">{car.name}</h2>
            <p className="main-description">{car.description}</p>{" "}
            {/* ✅ Fixed! */}
            <img
              src={"../assets/" + mainImage}
              alt={car.name}
              className="main-image"
            />
          </div>

          <div className="small-box-container">
            {car.images.map((image, index) => (
              <div
                key={index}
                className={`small-box ${mainImage === image ? "firstbox" : ""}`} // ✅ Apply firstbox style to selected image
                onClick={() => setMainImage(image)}
              >
                <div
                  className={`small-box ${mainImage === image ? "first" : ""}`}
                >
                  <img
                    src={"../assets/" + image}
                    alt={`${car.name} ${index + 1}`}
                    className={`thumbnail ${
                      mainImage === image ? "first" : ""
                    }`} // ✅ Apply first style to selected image
                  />
                </div>
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
          <p className="car-description">{car.description}</p> {/* ✅ Fixed! */}
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
