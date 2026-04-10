import FeaturedDishes from "../components/sections/FeaturedDishes";
import HowItWorks from "../components/sections/HowItWorks";
import StatsCounter from "../components/sections/StatsCounter";
import Testimonials from "../components/sections/Testimonials";
import Newsletter from "../components/sections/Newsletter";
import { Link } from "react-router-dom";

function HomePage({ foods, addToCart }) {
    return (
        <div className="home-page">
            {/* Hero */}
            <section className="hero">
                <h1>
                    Delicious Food,<br />
                    <span className="highlight">Delivered Fast</span> 🚀
                </h1>
                <p>Order from our curated menu of gourmet dishes, prepared fresh and delivered straight to your door.</p>
                <div className="hero-buttons">
                    <Link to="/menu" className="hero-btn primary">Explore Menu 🍽️</Link>
                    <a href="#how" className="hero-btn secondary">How it Works</a>
                </div>
            </section>

            {/* Stats */}
            <StatsCounter />

            {/* Featured */}
            <FeaturedDishes foods={foods} addToCart={addToCart} />

            {/* How It Works */}
            <div id="how">
                <HowItWorks />
            </div>

            {/* Testimonials */}
            <Testimonials />

            {/* Newsletter CTA */}
            <Newsletter />
        </div>
    );
}

export default HomePage;
