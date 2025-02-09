import React from "react";
import Filters from "../Filters/Filters";
import Footer from "../Footer/Footer"; // ✅ Adjusted import
import NavBar from "../NavBar/NavBar"; // ✅ New import for the extracted NavBar
import "./Layout.css";

function Layout({ children, filters, carsData, searchQuery, setSearchQuery }) {
  return (
    <div className="layout-container">
      <NavBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="main-section">
        <aside className="left-sidebar">
          <Filters {...filters} carsData={carsData} />
        </aside>
        <main className="content">{children}</main>
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
