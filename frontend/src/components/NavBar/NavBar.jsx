import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Favorite, Search } from "@mui/icons-material";
import "./NavBar.css"; // ✅ Separate CSS file for NavBar

const NavBar = ({ searchQuery, setSearchQuery }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isFavoritesPage = location.pathname === "/favorites";

  const handleHeartClick = () => {
    navigate(isFavoritesPage ? "/" : "/favorites");
  };

  return (
    <header className="nav-bar">
      <Link to="/" className="logo">
        ShenCarCar
      </Link>

      <div
        className="search-container"
        style={{ marginLeft: "calc(var(--sidebar-width) + 32px)" }}
      >
        <div className="search-bar-wrapper">
          <input
            type="text"
            placeholder="Search by car name"
            className="search-bar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-icon">
            <Search sx={{ color: "#596780" }} />
          </button>
        </div>
      </div>

      <button
        className="favorites-icon"
        onClick={handleHeartClick}
        aria-label="Favorites"
      >
        <Favorite sx={{ color: isFavoritesPage ? "red" : "#596780" }} />
      </button>
    </header>
  );
};

export default NavBar;
