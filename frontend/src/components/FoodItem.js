function FoodItem({ food, addToCart }) {
  return (
    <div className="food-card">
      <div className="food-card-img">
        <img src={food.image} alt={food.name} />
        <div className="card-rating">⭐ {food.rating}</div>
      </div>

      <div className="food-card-body">
        <h3>{food.name}</h3>
        <p className="food-desc">{food.description}</p>

        <div className="food-card-footer">
          <div className="food-price">
            ₹{food.price} <span>/ plate</span>
          </div>
          <button className="add-btn" onClick={() => addToCart(food)}>
            + Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodItem;