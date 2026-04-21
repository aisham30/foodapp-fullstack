import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function CartPage({ cartItems, removeFromCart }) {
    const [promoCode, setPromoCode] = useState("");
    const [promoApplied, setPromoApplied] = useState(false);
    const [promoError, setPromoError] = useState("");
    const [orderPlaced, setOrderPlaced] = useState(false);

    const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
    const discount = promoApplied ? Math.floor(subtotal * 0.2) : 0;
    const total = subtotal - discount;

    function applyPromo() {
        if (promoCode.toUpperCase() === "FIRST20") {
            setPromoApplied(true);
            setPromoError("");
        } else {
            setPromoError("Invalid promo code. Try FIRST20!");
            setPromoApplied(false);
        }
    }

    if (orderPlaced) {
        return (
            <div className="cart-page">
                <div className="order-success">
                    <span className="success-big-icon">🎉</span>
                    <h1>Order Placed!</h1>
                    <p>Your delicious food is being prepared and will be delivered shortly.</p>
                    <div className="order-details-card">
                        <div className="order-row"><span>Items</span><span>{cartItems.length}</span></div>
                        <div className="order-row"><span>Total Paid</span><span className="gradient-text">₹{total}</span></div>
                        <div className="order-row"><span>ETA</span><span>25-35 min</span></div>
                    </div>
                    <Link to="/" className="hero-btn primary" style={{ display: "inline-block", marginTop: 24 }}>Back to Home</Link>
                </div>
            </div>
        );
    }

    const placeOrder = async () => {
  if (cartItems.length === 0) return;

  try {
    const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

    await axios.post("https://foodapp-fullstack.onrender.com/api/orders", {
      items: cartItems,
      totalAmount
    });

    setOrderPlaced(true); // IMPORTANT
    alert("Order placed successfully 🎉");
    cartItems.length = 0;

  } catch (err) {
    alert("Error placing order ❌");
  }
};

    return (
        <div className="cart-page">
            <section className="page-hero">
                <h1>Your <span className="gradient-text">Cart</span> 🛒</h1>
                <p>{cartItems.length} items in your cart</p>
            </section>

            {cartItems.length === 0 ? (
                <div className="cart-empty-page">
                    <span className="empty-big-icon">🛍️</span>
                    <h2>Your cart is empty</h2>
                    <p>Looks like you haven't added anything yet!</p>
                    <Link to="/menu" className="hero-btn primary">Browse Menu →</Link>
                </div>
            ) : (
                <div className="cart-page-layout">
                    <div className="cart-items-list">
                        {cartItems.map((item, index) => (
                            <div className="cart-page-item" key={index}>
                                <img src={item.image} alt={item.name} className="cart-item-img" />
                                <div className="cart-page-item-info">
                                    <h3>{item.name}</h3>
                                    <p className="cart-page-item-desc">{item.description}</p>
                                    <span className="cart-page-item-price">₹{item.price}</span>
                                </div>
                                <button className="remove-btn" onClick={() => removeFromCart(index)}>✕ Remove</button>
                            </div>
                        ))}
                    </div>

                    <div className="cart-page-summary">
                        <h3>Order Summary</h3>

                        <div className="promo-section">
                            <div className="promo-input-wrap">
                                <input
                                    type="text"
                                    placeholder="Promo code..."
                                    value={promoCode}
                                    onChange={(e) => { setPromoCode(e.target.value); setPromoError(""); }}
                                />
                                <button onClick={applyPromo} className="promo-apply-btn">Apply</button>
                            </div>
                            {promoError && <p className="promo-error">{promoError}</p>}
                            {promoApplied && <p className="promo-success">🎉 20% off applied!</p>}
                        </div>

                        <div className="summary-rows">
                            <div className="summary-row"><span>Subtotal</span><span>₹{subtotal}</span></div>
                            {promoApplied && <div className="summary-row discount"><span>Discount (20%)</span><span>-₹{discount}</span></div>}
                            <div className="summary-row"><span>Delivery</span><span className="free-tag">Free</span></div>
                            <div className="summary-row total"><span>Total</span><span>₹{total}</span></div>
                        </div>

                        <button className="checkout-btn" onClick={placeOrder}>Place Order →</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartPage;
