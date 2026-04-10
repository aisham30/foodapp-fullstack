import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/sections/Footer";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import CartPage from "./pages/CartPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import "./App.css";

function App() {
  const foods = [
    {
      id: 1,
      name: "Pepperoni Pizza",
      description: "Hand-tossed crust with mozzarella, pepperoni & basil",
      price: 299,
      image: "/images/pizza.png",
      rating: 4.8,
      category: "Italian",
    },
    {
      id: 2,
      name: "Classic Burger",
      description: "Juicy beef patty with lettuce, tomato & cheddar",
      price: 199,
      image: "/images/burger.png",
      rating: 4.6,
      category: "Indian",
    },
    {
      id: 3,
      name: "Creamy Pasta",
      description: "Fettuccine alfredo with parmesan & fresh basil",
      price: 249,
      image: "/images/pasta.png",
      rating: 4.7,
      category: "Italian",
    },
    {
      id: 4,
      name: "Club Sandwich",
      description: "Triple-layered with chicken, bacon & cheese",
      price: 149,
      image: "/images/sandwich.png",
      rating: 4.5,
      category: "Indian",
    },
    {
      id: 5,
      name: "Salmon Sushi",
      description: "Fresh salmon rolls with avocado & sesame",
      price: 349,
      image: "/images/sushi.png",
      rating: 4.9,
      category: "Asian",
    },
    {
      id: 6,
      name: "Ramen Noodles",
      description: "Rich tonkotsu broth with pork belly & soft egg",
      price: 279,
      image: "/images/noodles.png",
      rating: 4.7,
      category: "Asian",
    },
  ];

  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function addToCart(food) {
    setCartItems([...cartItems, food]);
  }

  function removeFromCart(index) {
    const updated = cartItems.filter((_, i) => i !== index);
    setCartItems(updated);
  }

  return (
    <BrowserRouter>
      <Header cartCount={cartItems.length} />

      <Routes>
        <Route
          path="/"
          element={<HomePage foods={foods} addToCart={addToCart} />}
        />
        <Route
          path="/menu"
          element={
            <MenuPage
              foods={foods}
              addToCart={addToCart}
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          }
        />
        <Route
          path="/cart"
          element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />}
        />
        <Route
          path="/about"
          element={<AboutPage />}
        />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
