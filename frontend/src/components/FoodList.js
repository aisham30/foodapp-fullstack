import FoodItem from "./FoodItem";

function FoodList({ foods, addToCart, selectedCategory, onCategoryChange }) {
  const categories = ["All", "Indian", "Italian", "Asian"];

  const filtered = selectedCategory === "All"
    ? foods
    : foods.filter((f) => f.category === selectedCategory);

  return (
    <div className="menu-section" id="menu">
      {/* Category filter pills */}
      <div className="categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-pill ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => onCategoryChange(cat)}
          >
            {cat === "All" ? "🍽️ All" : cat === "Indian" ? "🇮🇳 Indian" : cat === "Italian" ? "🇮🇹 Italian" : "🥢 Asian"}
          </button>
        ))}
      </div>

      <div className="menu-section-title">
        {selectedCategory === "All" ? "All Dishes" : selectedCategory + " Dishes"}
      </div>

      <div className="menu-grid">
        {filtered.map((food) => (
          <FoodItem
            key={food.id}
            food={food}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default FoodList;