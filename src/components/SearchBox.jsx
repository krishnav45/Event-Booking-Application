import { useEffect, useState } from "react";

/* ---------- SVG SEARCH ICON ---------- */
const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M21 21L16.65 16.65M11 18
      C7.13 18 4 14.87 4 11
      C4 7.13 7.13 4 11 4
      C14.87 4 18 7.13 18 11
      C18 14.87 14.87 18 11 18Z"
      stroke="#9AA3B2"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SearchBox = ({ onSearch }) => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  /* FETCH STATES */
  useEffect(() => {
    fetch("https://eventdata.onrender.com/states")
      .then(res => res.json())
      .then(data => setStates(data))
      .catch(console.error);
  }, []);

  /* FETCH CITIES */
  useEffect(() => {
    if (!selectedState) return;

    fetch(`https://eventdata.onrender.com/cities/${selectedState}`)
      .then(res => res.json())
      .then(data => setCities(data))
      .catch(console.error);
  }, [selectedState]);

  /* FETCH EVENTS */
  const handleSearch = () => {
    if (!selectedState || !selectedCity) return;

    fetch(
      `https://eventdata.onrender.com/events?state=${selectedState}&city=${selectedCity}`
    )
      .then(res => res.json())
      .then(data => onSearch(data))
      .catch(console.error);
  };

  return (
    <div className="search-category-container">
      <div className="form-row">

        {/* STATE */}
        <div className="dropdown state-dropdown">
          <span className="search-icon"><SearchIcon /></span>
          <select
            id="state"   /* ✅ FIXED HERE */
            value={selectedState}
            onChange={(e) => {
              setSelectedState(e.target.value);
              setSelectedCity("");
            }}
          >
            <option value="">Select State</option>
            {states.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* CITY */}
        <div className="dropdown city-dropdown">
          <span className="search-icon"><SearchIcon /></span>
          <select
            id="city"   /* ✅ FIXED HERE */
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            disabled={!selectedState}
          >
            <option value="">Select City</option>
            {cities.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <button
          id="searchBtn"
          type="button"   /* ✅ ADDED */
          className="search-btn"
          onClick={handleSearch}
        >
          Search
        </button>

      </div>

      <div className="content-container">
        <p className="looking-text">You may be looking for</p>

        <div className="category-grid">
          <div className="category-item">
            <img src="/7424f9e88e17240293501cb88aebb7bd6db8dc90.png" alt="Event" />
            <p>Event</p>
          </div>

          <div className="category-item">
            <img src="/1c2de37888d1b01fe58dee3407c4b33678093068.png" alt="Venue" />
            <p>Venue</p>
          </div>

          <div className="category-item">
            <img src="/e3b83558e8df8237ea285b638a1efe9449eb1f9a.png" alt="Ticket" />
            <p>Ticket</p>
          </div>

          <div className="category-item">
            <img src="/15e6384ba45900fdcc19ab791bb2d6c58c0fb7cf.png" alt="Shop" />
            <p>Shop</p>
          </div>

          <div className="category-item">
            <img src="/1ba56de009058f901ed0e99ee0284b9ec9131c45.png" alt="Service" />
            <p>Service</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
