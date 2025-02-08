import React from "react";
import { useLocation } from "react-router-dom";
import SearchBar from "../searchBar/searchBar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import Logo from "../logo/logo";
import "./header.css";

function Header({ onSearch, showFavorites, setShowFavorites }) {
  const location = useLocation();
  const isCarDetailsPage = location.pathname.startsWith("/cars/");

  const handleFavoriteClick = () => {
    if (!isCarDetailsPage) {
      setShowFavorites(!showFavorites); // ✅ Now this function exists
    }
  };

  return (
    <header>
      <div className="logo-container">
        <Logo />
      </div>
      <SearchBar onSearch={onSearch} />
      <IconButton
        onClick={handleFavoriteClick}
        className={
          showFavorites ? "favorite-header liked" : "favorite-header unliked"
        }
      >
        <FavoriteIcon />
      </IconButton>
    </header>
  );
}

export default Header;
