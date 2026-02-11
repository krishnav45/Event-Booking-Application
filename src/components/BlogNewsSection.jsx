const BlogNewsSection = () => {
  return (
    <div className="blog-outer">

      <div className="blog-inner">

        {/* TOP TAG */}
        <div className="blog-tag">Blog & News</div>

        {/* HEADING */}
        <h2 className="blog-heading">Read Our Latest News</h2>

        {/* BLOG LIST */}
        <div className="blog-list">

          {/* BLOG CARD 1 */}
          <div className="blog-card">
            <img
              src="/9060db2d6bd688bfa4370b156bf556d6bc70c300.jpg"
              alt="blog"
              className="blog-image"
            />

            <div className="blog-content">
              <p className="blog-meta">Events | March 31, 2022</p>

              <h3 className="blog-title">
                5 Strategies to Maximize Your Event Attendance
              </h3>

              <div className="blog-author">
                <img src="/b2b75a6cfd7fd882ba9a121416feef73806bfa85.png" alt="author" />
                <span>John Doe</span>
              </div>
            </div>
          </div>

          {/* BLOG CARD 2 */}
          <div className="blog-card">
            <img
              src="/9060db2d6bd688bfa4370b156bf556d6bc70c300.jpg"
              alt="blog"
              className="blog-image"
            />

            <div className="blog-content">
              <p className="blog-meta">Events | March 31, 2022</p>

              <h3 className="blog-title">
                5 Strategies to Maximize Your Event Attendance
              </h3>

              <div className="blog-author">
                <img src="/b2b75a6cfd7fd882ba9a121416feef73806bfa85.png" alt="author" />
                <span>John Doe</span>
              </div>
            </div>
          </div>

          {/* BLOG CARD 3 */}
          <div className="blog-card">
            <img
              src="/9060db2d6bd688bfa4370b156bf556d6bc70c300.jpg"
              alt="blog"
              className="blog-image"
            />

            <div className="blog-content">
              <p className="blog-meta">Events | March 31, 2022</p>

              <h3 className="blog-title">
                5 Strategies to Maximize Your Event Attendance
              </h3>

              <div className="blog-author">
                <img src="/b2b75a6cfd7fd882ba9a121416feef73806bfa85.png" alt="author" />
                <span>John Doe</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogNewsSection;
