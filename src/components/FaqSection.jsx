const FaqSection = () => {
  return (
    <div className="faq-outer">

      <div className="faq-inner">

        {/* TOP TEXT */}
        <div className="faq-tag">Get Your Answer</div>

        <h2 className="faq-heading">Frequently Asked Questions</h2>

        {/* CONTENT */}
        <div className="faq-content">

          {/* LEFT IMAGE */}
          <div className="faq-image-box">
            <img
              src="/3e5b583fa72f9a3b74964cadbb75eb312ce2a99b.jpg"
              alt="faq"
              className="faq-image"
            />
          </div>

          {/* RIGHT QUESTIONS */}
          <div className="faq-questions-wrapper">
            <div className="faq-questions">

              <div className="faq-item">
                <span>Why choose our event tracking platform?</span>
                <div className="faq-plus">+</div>
              </div>

              <div className="faq-item">
                <span>What makes us different from others?</span>
                <div className="faq-plus">+</div>
              </div>

              <div className="faq-item">
                <span>How do we ensure data security?</span>
                <div className="faq-plus">+</div>
              </div>

              <div className="faq-item">
                <span>How can I get support for my events?</span>
                <div className="faq-plus">+</div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default FaqSection;
