import "./Navigation.css";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className="navigation">
      <h4>Shopping Shoes</h4>
      <ul>
        <li>
          <NavLink to="/">HomePage</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
