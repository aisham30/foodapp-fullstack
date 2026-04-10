function Cart({ cartItems, removeFromCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-panel" id="cart-section">
      <div className="cart-header">
        <h2>🛒 Your Cart</h2>
        <span className="item-count">{cartItems.length} items</span>
      </div>

      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <span className="empty-icon">🛍️</span>
          <p>Your cart is empty.<br />Add some delicious food!</p>
        </div>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <div className="cart-item-info">
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-price">₹{item.price}</span>
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(index)}>
                ✕ Remove
              </button>
            </div>
          ))}

          <div className="cart-footer">
            <div className="cart-summary-row">
              <span>Subtotal</span>
              <span>₹{total}</span>
            </div>
            <div className="cart-summary-row">
              <span>Delivery</span>
              <span style={{ color: '#34c759' }}>Free</span>
            </div>
            <div className="cart-total">
              <span>Total</span>
              <span className="total-price">₹{total}</span>
            </div>
            <button className="checkout-btn">
              Place Order →
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;