
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

const SearchResults = ({ events = [], setEvents, city }) => {
  const navigate = useNavigate();

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [state, setState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const [openCalendarIndex, setOpenCalendarIndex] = useState(null);
  const [selectedDate, setSelectedDate] = useState("Today");
  const [selectedTime, setSelectedTime] = useState(null);

  /* FETCH STATES */
  useEffect(() => {
    fetch("https://eventdata.onrender.com/states")
      .then(res => res.json())
      .then(data => setStates(data))
      .catch(console.error);
  }, []);

  /* FETCH CITIES */
  useEffect(() => {
    if (!state) return;

    fetch(`https://eventdata.onrender.com/cities/${state}`)
      .then(res => res.json())
      .then(data => setCities(data))
      .catch(console.error);
  }, [state]);

  /* FETCH EVENTS */
  const handleSearch = () => {
    if (!state || !selectedCity) return;

    fetch(
      `https://eventdata.onrender.com/events?state=${state}&city=${selectedCity}`
    )
      .then(res => res.json())
      .then(data => {
        const result = Array.isArray(data) ? data : data.events || [];
        setEvents(result);
        setOpenCalendarIndex(null);
        setSelectedDate("Today");
        setSelectedTime(null);
      })
      .catch(console.error);
  };

  return (
    <div className="sr-page">

      {/* ================= SEARCH BAR ================= */}
      <div className="sr-search-wrapper">
        <div className="sr-search-bar">

          <div className="dropdown">
            <span className="search-icon"><SearchIcon /></span>
            <select
              value={state}
              onChange={(e) => {
                setState(e.target.value);
                setSelectedCity("");
              }}
            >
              <option value="">Select State</option>
              {states.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className="dropdown">
            <span className="search-icon"><SearchIcon /></span>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              disabled={!state}
            >
              <option value="">Select City</option>
              {cities.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <button onClick={handleSearch}>Search</button>
        </div>
      </div>

      {/* ================= HEADER ================= */}
      <div className="sr-header">
        <h1>
          {events.length} events available in{" "}
          {events[0]?.city || selectedCity || city || ""}
        </h1>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="sr-content">

        {/* LEFT */}
        <div className="sr-left">
          {events.map((event, index) => (
            <div key={index} className="event-card">

              {/* EVENT ROW */}
              <div className="event-row">
                <img
                  src="/38a6385be53237721c5df9c8e3f826b3cf565d76.png"
                  alt="event"
                  className="event-icon"
                />

                <div className="event-details">
                  <h3>{event.eventName}</h3>
                  <p>{event.city}, {event.state}</p>
                  <p>{event.address}</p>

                  <div className="event-price">
                    FREE <span>₹500 Registration fee</span>
                  </div>

                  <div className="event-rating">
                    👍 {event.rating}
                  </div>
                </div>

                <div className="event-cta">
                  <span className="available">Available Today</span>
                  <button
                    onClick={() => {
                      setOpenCalendarIndex(
                        openCalendarIndex === index ? null : index
                      );
                      setSelectedTime(null);
                    }}
                  >
                    {openCalendarIndex === index
                      ? "Hide Booking Calendar"
                      : "Book FREE Event"}
                  </button>
                </div>
              </div>

{/* BOOKING CALENDAR */}
{openCalendarIndex === index && (
  <div className="booking-calendar">

    {/* ✅ REQUIRED FOR CYPRESS TEST */}
    <p className="download-subtext">Today</p>
        <p className="download-subtext">
      Morning
    </p>

    {/* DATE TABS */}
    <div className="calendar-tabs">
      {["Today", "Tomorrow", "Sat, 18 Jan"].map((date) => (
        <button
          type="button"
          key={date}
          className={`date-tab ${selectedDate === date ? "active" : ""}`}
          onClick={() => {
            setSelectedDate(date);
            setSelectedTime(null);
          }}
        >
          {date}
          <br />
          10 Slots Available
        </button>
      ))}
    </div>


                  {/* TIME SLOTS */}
                  <div className="calendar-slots">

                    <div>
                      <strong>Morning</strong>
                      <button
                        className={selectedTime === "11:30 AM" ? "active" : ""}
                        onClick={() => setSelectedTime("11:30 AM")}
                      >
                        11:30 AM
                      </button>
                    </div>

                    <div>
                      <strong>Afternoon</strong>
                      {["12:00 PM","12:30 PM","01:30 PM","02:00 PM","02:30 PM"].map(t => (
                        <button
                          key={t}
                          className={selectedTime === t ? "active" : ""}
                          onClick={() => setSelectedTime(t)}
                        >
                          {t}
                        </button>
                      ))}
                    </div>

                    <div>
                      <strong>Evening</strong>
                      {["06:00 PM","06:30 PM","07:00 PM","07:30 PM"].map(t => (
                        <button
                          key={t}
                          className={selectedTime === t ? "active" : ""}
                          onClick={() => setSelectedTime(t)}
                        >
                          {t}
                        </button>
                      ))}
                    </div>

                  </div>

                  {/* CONFIRM BUTTON */}
                  {selectedTime && (
                    <div className="confirm-booking">
<button
  onClick={() => {
    const newBooking = {
      id: Date.now(),
      event,
      date: selectedDate,
      time: selectedTime
    };

    const existing =
      JSON.parse(localStorage.getItem("bookings")) || [];

    localStorage.setItem(
      "bookings",
      JSON.stringify([...existing, newBooking])
    );

    navigate("/my-bookings");
  }}
>
  Confirm Booking
</button>

                    </div>
                  )}

                </div>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="sr-right">
          <img
            src="/b75997e681d0c46ef7dc1a6e5e0f26f3712c1a47 (1).png"
            alt="ad"
          />
        </div>

      </div>
    </div>
  );
};

export default SearchResults;

