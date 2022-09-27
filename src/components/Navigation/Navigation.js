import "./Navigation.css";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <section className="navigation">
      <nav>
        <ul>
          <li>
            <NavLink to="/">HomePage</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navigation;
