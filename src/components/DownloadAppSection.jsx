const DownloadAppSection = () => {
  return (
    <div className="download-outer">
      <div className="download-inner">

        {/* LEFT IMAGE */}
        <div className="download-image-box">
          <img
            src="/fabda805f0baaf029d94a304df489384538f1a18.png"
            alt="download app"
            className="download-image"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="download-content">

          <h2 className="download-heading">
            Download the<br /> <span>Event Tracker</span> App
          </h2>

          {/* INPUT SECTION */}
          <div className="download-input-box">
            <p className="download-subtext">
              Get the link to download the app
            </p>

            <div className="phone-input-row">
              <span className="country-code">+91</span>
              <input
                type="text"
                placeholder="Enter your phone number"
              />
              <button className="sms-btn">Send SMS</button>
            </div>
          </div>

          {/* STORE BUTTONS */}
          <div className="store-buttons">
            <button className="store-btn">
              <img src="/d5ee718f6dc0e469b461fdde7491ddc1954a3f17.png" alt="google play" />
              Google Play
            </button>

            <button className="store-btn">
              <img src="/7e6e34dfc8f92affdfa600ba588e9dc5e80b7cad.png" alt="app store" />
              App Store
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DownloadAppSection;
