const Categories = () => {
  return (
    <div className="categories">
      <p className="category-title">You may be looking for</p>

      <div className="category-list">
        <div className="category-card">📅 Events</div>
        <div className="category-card">🏛 Venues</div>
        <div className="category-card active">🎟 Tickets</div>
        <div className="category-card">🎓 Workshops</div>
        <div className="category-card">⚙ Services</div>
      </div>
    </div>
  );
};

export default Categories;
