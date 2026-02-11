const EventTrackerSection = () => {
  return (
    <div className="tracker-outer">

      <div className="tracker-inner">

        {/* LEFT CONTENT */}
        <div className="tracker-content">

          <div className="tracker-tag">
            TRACKING EVENTS FOR YOU AND YOUR TEAM.
          </div>

          <h2 className="tracker-heading">
            Event Tracker
          </h2>

          <p className="tracker-description">
            We provide comprehensive tools to help you track and manage your
            events efficiently. Whether it's a small meeting or a large
            conference, our platform ensures that you stay organized and
            informed. All your event details are handled with the utmost care
            and confidentiality.
          </p>

        </div>

        {/* RIGHT IMAGE */}
        <div className="tracker-image-box">
          <img
            src="/aa7326c1da8b834788267cb9889edb397ac1ba87.png"
            alt="event tracker"
            className="tracker-image"
          />
        </div>

      </div>
    </div>
  );
};

export default EventTrackerSection;
