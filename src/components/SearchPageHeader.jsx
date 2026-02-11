import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchPageHeader = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="search-header">

      {/* TOP INFO BAR */}
      <div className="search-topbar">
        <p>
          Stay updated with the latest events and maximize your experience with our platform.
        </p>
      </div>

      {/* NAV BAR */}
      <div className="search-navbar">
        <div className="search-navbar-inner">

          {/* LOGO */}
          <img
            src="/11925d23ca8839816bfa08630759177ad35e6145 (2).png"
            alt="logo"
            className="search-logo"
            onClick={() => navigate("/")}
          />

          {/* DESKTOP LINKS */}
          <nav className="search-nav-links">
            <a href="#">Find Events</a>
            <a href="#">Venues</a>
            <a href="#">Tickets</a>
            <a href="#">Workshops</a>
            <a href="#">Event Management Software</a>
            <a href="#">Services</a>

            <button
              className="my-booking-btn"
              onClick={() => navigate("/my-bookings")}
            >
              My Bookings
            </button>
          </nav>

          {/* HAMBURGER */}
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#">Find Events</a>
          <a href="#">Venues</a>
          <a href="#">Tickets</a>
          <a href="#">Workshops</a>
          <a href="#">Event Management Software</a>
          <a href="#">Services</a>

          <button
            className="my-booking-btn mobile-booking"
            onClick={() => {
              setMenuOpen(false);
              navigate("/my-bookings");
            }}
          >
            My Bookings
          </button>
        </div>
      )}

    </header>
  );
};

export default SearchPageHeader;
