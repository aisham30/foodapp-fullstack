import { useState } from "react";

function Testimonials() {
    const reviews = [
        { name: "Priya Sharma", avatar: "👩‍💼", rating: 5, text: "Absolutely love the food quality! The pasta was restaurant-grade and delivered piping hot. Will order again!", date: "2 days ago" },
        { name: "Rahul Mehta", avatar: "👨‍💻", rating: 5, text: "Best food delivery app I've used. The sushi was incredibly fresh and the packaging was excellent.", date: "1 week ago" },
        { name: "Ananya Patel", avatar: "👩‍🎨", rating: 4, text: "Great variety of cuisines! The burger was juicy and perfectly cooked. Fast delivery too!", date: "3 days ago" },
        { name: "Vikram Singh", avatar: "👨‍🍳", rating: 5, text: "The ramen noodles tasted like they came straight from a Japanese kitchen. Incredible flavor!", date: "5 days ago" },
        { name: "Sneha Reddy", avatar: "👩‍⚕️", rating: 5, text: "Love the category filters — so easy to find what I'm craving. The pizza was 10/10!", date: "1 day ago" },
        { name: "Arjun Kumar", avatar: "👨‍🎓", rating: 4, text: "Affordable and delicious. The sandwich was loaded with filling. Perfect for a quick meal.", date: "4 days ago" },
    ];

    const [visibleCount, setVisibleCount] = useState(3);
    const [likedReviews, setLikedReviews] = useState({});

    function toggleLike(index) {
        setLikedReviews((prev) => ({ ...prev, [index]: !prev[index] }));
    }

    function showMore() {
        setVisibleCount((prev) => Math.min(prev + 3, reviews.length));
    }

    return (
        <section className="testimonials">
            <h2 className="section-heading">
                What Our Customers <span className="gradient-text">Say</span>
            </h2>
            <p className="section-subtitle">Real reviews from real food lovers</p>

            <div className="testimonials-grid">
                {reviews.slice(0, visibleCount).map((review, i) => (
                    <div className="testimonial-card" key={i}>
                        <div className="testimonial-top">
                            <div className="testimonial-avatar">{review.avatar}</div>
                            <div>
                                <h4>{review.name}</h4>
                                <span className="testimonial-date">{review.date}</span>
                            </div>
                        </div>
                        <div className="testimonial-stars">
                            {"⭐".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                        </div>
                        <p className="testimonial-text">"{review.text}"</p>
                        <button
                            className={`like-btn ${likedReviews[i] ? "liked" : ""}`}
                            onClick={() => toggleLike(i)}
                        >
                            {likedReviews[i] ? "❤️" : "🤍"} Helpful
                        </button>
                    </div>
                ))}
            </div>

            {visibleCount < reviews.length && (
                <button className="show-more-btn" onClick={showMore}>
                    Show More Reviews ↓
                </button>
            )}
        </section>
    );
}

export default Testimonials;
