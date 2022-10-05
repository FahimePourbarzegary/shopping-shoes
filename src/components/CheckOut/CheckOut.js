import { Link } from "react-router-dom";
import { useAuth } from "../../Providers/AuthProvider";
import { useCart } from "../../Providers/CartProvider";
import "./CheckOut.css";
const CheckOut = () => {
  const { cart, total } = useCart();
  const userData = useAuth();
  if (!cart.length)
    return (
      <section className="container">
        <Link to="/">go to shopping</Link>
      </section>
    );
  return (
    <section className="container">
      <div className="checkCenter">
        <div className="checkItemList">
          <h3>Check out detail</h3>
          <div className="checkItem">
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            <p>PhoneNumber: {userData.phoneNumber}</p>
          </div>
        </div>
        <div className="checkSummery">
          <div className="summeryItemcheck">
            {cart.map((c) => {
              return (
                <div>
                  <p>
                    {c.name} * {c.quantity} : {c.quantity * c.offPrice}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="summeryItemcheck net">
            <p>Total: {total}</p>
          </div>
          <div>
            <button type="sbmit" className="btn btn__primary">
              Buy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
