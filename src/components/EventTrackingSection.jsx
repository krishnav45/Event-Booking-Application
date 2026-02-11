const EventTrackingSection = () => {
  return (
    <div className="event-track-outer">
      <div className="event-track-inner">

        {/* LEFT IMAGE */}
        <div className="event-track-image-box">
          <img
            src="/11925d23ca8839816bfa08630759177ad35e6145 (2).png"
            alt="event tracking"
            className="event-track-image"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="event-track-content">

          <div className="tag-line">
            CONNECTING PEOPLE THROUGH EVENTS!!
          </div>

          <h2 className="main-heading">
            Event <span>Tracking</span>
          </h2>

          <p className="description">
            Our goal is to deliver an exceptional event experience in a courteous,
            respectful, and engaging manner. We hope you will allow us to help you
            stay updated and connected through our platform.
          </p>

          <div className="features">
            <div className="feature-item">
              <img src="/0170f4df2b87de2cd10e9adf6cc6582112a9f61b.png" alt="tick" />
              <span>Stay Updated About Events</span>
            </div>

            <div className="feature-item">
              <img src="/0170f4df2b87de2cd10e9adf6cc6582112a9f61b.png" alt="tick" />
              <span>Check Event Details Online</span>
            </div>

            <div className="feature-item">
              <img src="/0170f4df2b87de2cd10e9adf6cc6582112a9f61b.png" alt="tick" />
              <span>Manage Your Bookings</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EventTrackingSection;
