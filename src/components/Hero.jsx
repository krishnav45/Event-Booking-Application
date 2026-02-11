import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="hero-outer">

      {/* TOP BAR */}
      <div className="hero-topbar">
        Stay updated with the latest events and maximize your experience with our platform.
      </div>

      {/* NAVBAR */}
      <div className="hero-navbar">
        <div className="navbar-inner">

          <img
            src="/11925d23ca8839816bfa08630759177ad35e6145 (2).png"
            alt="logo"
            className="nav-logo"
          />

          <div className="nav-links">
            <a href="#">Find Events</a>
            <a href="#">Venues</a>
            <a href="#">Tickets</a>
            <a href="#">Workshops</a>
            <a href="#">Event Management Software</a>
            <a href="#">Services</a>
            <button className="booking-btn"
            onClick={() => {
              navigate("/booking");
            }}            
            >My Bookings</button>
          </div>

          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>

        {menuOpen && (
          <div className="mobile-menu">
            <a href="#">Find Events</a>
            <a href="#">Venues</a>
            <a href="#">Tickets</a>
            <a href="#">Workshops</a>
            <a href="#">Event Management Software</a>
            <a href="#">Services</a>
            <button className="booking-btn"
            onClick={() => {
              navigate("/booking");
            }}
            >My Bookings</button>
          </div>
        )}
      </div>

      {/* HERO */}
      <div className="hero-content">
        <div className="hero-inner">

          <div className="hero-text">
            <h4>Skip the hassle! Track Online</h4>
            <h1>Event <span>Tracker</span></h1>
            <p>
              Connect instantly with our platform to manage and track your
              events efficiently.
            </p>
            <button className="find-event-btn">Find Events</button>
          </div>

          <div className="hero-image">
            <img
              src="/678c523df681ee0eadbbfb01133c5f5c610ec836.png"
              alt="event"
            />
          </div>

        </div>

        {/* SEARCH BOX SLOT */}
        <div className="searchbox-wrapper">
          {/* SearchBox component goes here */}
        </div>

      </div>
    </div>
  );
};

export default Hero;
