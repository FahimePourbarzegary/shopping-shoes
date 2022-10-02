import "./Navigation.css";
import { NavLink } from "react-router-dom";
import { useCart } from "../../Providers/CartProvider";
const Navigation = () => {
  const {cart}=useCart();
  return (
    <nav className="navigation">
      <h4>Shopping Shoes</h4>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart</NavLink>
          <span>{cart.length}</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
