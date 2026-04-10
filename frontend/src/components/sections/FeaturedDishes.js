import { useState } from "react";
import { Link } from "react-router-dom";

function FeaturedDishes({ foods, addToCart }) {
    const [hoveredId, setHoveredId] = useState(null);
    const featured = foods.filter((f) => f.rating >= 4.7);

    return (
        <section className="featured-section">
            <h2 className="section-heading">
                Today's <span className="gradient-text">Specials</span> 🔥
            </h2>
            <p className="section-subtitle">Hand-picked dishes with the highest ratings</p>

            <div className="featured-scroll">
                {featured.map((food) => (
                    <div
                        key={food.id}
                        className={`featured-card ${hoveredId === food.id ? "featured-hovered" : ""}`}
                        onMouseEnter={() => setHoveredId(food.id)}
                        onMouseLeave={() => setHoveredId(null)}
                    >
                        <div className="featured-img">
                            <img src={food.image} alt={food.name} />
                            <div className="featured-overlay">
                                <button className="add-btn" onClick={() => addToCart(food)}>+ Add to Cart</button>
                            </div>
                        </div>
                        <div className="featured-info">
                            <h3>{food.name}</h3>
                            <div className="featured-meta">
                                <span className="featured-rating">⭐ {food.rating}</span>
                                <span className="featured-price">₹{food.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="featured-cta">
                <Link to="/menu" className="view-all-btn">View Full Menu →</Link>
            </div>
        </section>
    );
}

export default FeaturedDishes;
