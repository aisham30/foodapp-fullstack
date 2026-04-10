import FoodList from "../components/FoodList";
import Cart from "../components/Cart";

function MenuPage({ foods, addToCart, cartItems, removeFromCart, selectedCategory, onCategoryChange }) {
    return (
        <div className="menu-page">
            <section className="page-hero">
                <h1>Our <span className="gradient-text">Menu</span></h1>
                <p>Explore all our delicious offerings across multiple cuisines</p>
            </section>

            <div className="container">
                <FoodList
                    foods={foods}
                    addToCart={addToCart}
                    selectedCategory={selectedCategory}
                    onCategoryChange={onCategoryChange}
                />
                <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
            </div>
        </div>
    );
}

export default MenuPage;
