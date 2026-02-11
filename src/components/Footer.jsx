const Footer = () => {
  return (
    <footer className="footer-outer">
      <div className="footer-inner">
        <div className="footer-main">

          {/* PART 1 – LOGO + SOCIAL */}
          <div className="footer-col footer-brand">
            <div className="footer-brand-inner">
              <img
                src="/11925d23ca8839816bfa08630759177ad35e6145 (2).png"
                alt="Event Tracker"
                className="footer-logo"
              />

              <div className="footer-social">
                <img src="/63a1da690da503834ecd17a2349053af5f702769.png" alt="facebook" />
                <img src="/038532a993237abf4b3f539a162fbc52ba5648fa.png" alt="twitter" />
                <img src="/602336ebda2aff013686745ceb238231afeedb8e.png" alt="youtube" />
                <img src="/05d133c1c80e97c67d2869dce57b73e1ac8f4f0b.png" alt="instagram" />
              </div>
            </div>
          </div>

          {/* PART 2 */}
          <div className="footer-col">
            <ul>
              <li>&gt; About Us</li>
              <li>&gt; Pricing</li>
              <li>&gt; Gallery</li>
              <li>&gt; Contact Us</li>
              <li>&gt; Privacy Policy</li>
            </ul>
          </div>

          {/* PART 3 */}
          <div className="footer-col">
            <ul>
              <li>&gt; Event Management</li>
              <li>&gt; Real-time Tracking</li>
              <li>&gt; Customizable Features</li>
              <li>&gt; Support</li>
              <li>&gt; Security</li>
            </ul>
          </div>

          {/* PART 4 */}
          <div className="footer-col">
            <ul>
              <li>&gt; About Us</li>
              <li>&gt; Pricing</li>
              <li>&gt; Gallery</li>
              <li>&gt; Contact Us</li>
              <li>&gt; Privacy Policy</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom">
          Copyright ©2025 EventTracker.com. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
