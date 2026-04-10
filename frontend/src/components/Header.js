import { useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";

function Header({ cartCount }) {
  const badgeRef = useRef(null);
  const prevCount = useRef(cartCount);

  useEffect(() => {
    if (cartCount !== prevCount.current && badgeRef.current) {
      badgeRef.current.classList.remove("bounce");
      void badgeRef.current.offsetWidth;
      badgeRef.current.classList.add("bounce");
      prevCount.current = cartCount;
    }
  }, [cartCount]);

  return (
    <header className="header">
      
      {/* Logo */}
      <Link
        to="/"
        className="header-logo"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <span className="logo-icon">🍔</span>
        <span className="logo-text">FoodDash</span>
      </Link>

      <div className="header-right">

        {/* Navigation */}
        <nav className="header-nav">
          <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
            Home
          </NavLink>

          <NavLink to="/menu" className={({ isActive }) => isActive ? "active" : ""}>
            Menu
          </NavLink>

          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
            About
          </NavLink>

          {/* ✅ NEW CONTACT LINK */}
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
            Contact
          </NavLink>
        </nav>

        {/* Cart Button */}
        <Link to="/cart" className="cart-btn" style={{ textDecoration: "none" }}>
          🛒 Cart
          {cartCount > 0 && (
            <span ref={badgeRef} className="cart-badge">
              {cartCount}
            </span>
          )}
        </Link>

      </div>
    </header>
  );
}

export default Header;