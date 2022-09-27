import "./App.css";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import CartPage from "./Pages/CartPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
