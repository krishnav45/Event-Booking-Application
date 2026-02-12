import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function MyBookings() {
  const { state } = useLocation();

  const [bookings, setBookings] = useState([]);

  /* LOAD + ADD BOOKING SAFELY */
 useEffect(() => {
  const storedBookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

  // If coming with new booking data
  if (state?.event) {
    const newBooking = {
      event: state.event,
      date: state.date,
      time: state.time,
    };

    const updatedBookings = [...storedBookings, newBooking];

    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    setBookings(updatedBookings);

    // 🔥 Remove state so it doesn't add again on refresh
    window.history.replaceState({}, document.title);
  } else {
    // Just load saved bookings
    setBookings(storedBookings);
  }
}, []);


  /* DELETE BOOKING */
  const handleDelete = (index) => {
    const updated = bookings.filter((_, i) => i !== index);
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  };

  return (
    <div className="page-wrapper">
      {/* HEADER */}
      <div className="header-outer">
        <div className="header-bar">
          <div className="header-inner">
            <div className="header-content">
              <h1 className="page-title">My Bookings</h1>

              <div className="search-area">
                <input
                  type="text"
                  placeholder="Search events"
                  className="search-input"
                />
                <button className="search-btn">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="body-outer">
        <div className="body-inner">

          {/* LEFT COLUMN */}
          <div className="left-column">
            {bookings.length === 0 ? (
              <h3 style={{ textAlign: "center" }}>
                No bookings found
              </h3>
            ) : (
              bookings.map((booking, index) => (
                <div key={index} className="booking-card">
                  <div className="card-inner">

                    {/* EVENT IMAGE */}
                    <img
                      src="/38a6385be53237721c5df9c8e3f826b3cf565d76 (1).png"
                      alt="event"
                      className="event-thumb"
                    />

                    {/* EVENT INFO */}
                    <div className="event-info">

                      <div className="top-row">
                        <h3>{booking.event?.eventName || booking.eventName}</h3>

                        <div className="badge-group">
                          <span className="time-badge">
                            {booking.time}
                          </span>
                          <span className="date-badge">
                            {booking.date}
                          </span>
                        </div>
                      </div>

                      <p className="location">
                        {booking.event?.city},{" "}
                        {booking.event?.state}
                      </p>

                      <p className="address">
                        {booking.event?.address}
                      </p>

                      <div className="price-row">
                        <span className="free-badge">FREE</span>
                        <span className="fee">
                          ₹500 Registration Fee
                        </span>
                      </div>

                      <div className="divider"></div>

                      <div className="rating-box">
                        <img
                          src="/365a3dae5113f61b3d65050c99d2363dc5780103 (1).png"
                          alt="rating"
                        />
                        <span>{booking.event?.rating}</span>
                      </div>

                      <div className="action-row">
                        <button
                          onClick={() => handleDelete(index)}
                          className="delete-btn"
                        >
                          Delete
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* RIGHT COLUMN - POSTER */}
          <div className="right-column">
            <img
              src="/e75a7beabed2a5b0c0d9f7a8c6aa6caf1eea1338 (2).png"
              alt="poster"
              className="poster-image"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
