import "./App.css";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import CartPage from "./Pages/CartPage";
import CartProvider from "./Providers/CartProvider";
function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
