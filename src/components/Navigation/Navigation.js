import "./Navigation.css";
import { NavLink } from "react-router-dom";
import { useCart } from "../../Providers/CartProvider";
import { useAuth } from "../../Providers/AuthProvider";
const Navigation = () => {
  const { cart } = useCart();
  const userData = useAuth();
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
        <li>
          <NavLink to={userData ? "/profile" : "/login"}>
            {userData ? "Profile" : "Login/Signup"}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
