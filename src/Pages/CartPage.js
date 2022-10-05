import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useCart, useCartActions } from "../Providers/CartProvider";
import "./cartPage.css";
const CartPage = () => {
  const { cart, total } = useCart();
  const dispatch = useCartActions();
  const incrementHandler = (cartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  };
  const decrementHandler = (cartItem) => {
    dispatch({ type: "DECREMENT_OF_CART", payload: cartItem });
  };
  if (!cart.length) {
    return (
      <Layout>
        <h4>no item in cart...</h4>
      </Layout>
    );
  }

  return (
    <Layout>
      <main className="container">
        <section className="cartCenter">
          <section className="cartItemList">
            {cart.map((item) => {
              return (
                <section className="cartItem" key={item.id}>
                  <div className="cartItem__img">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div>{item.name}</div>
                  <div>{item.offPrice * item.quantity}$</div>
                  <div
                    className="btn-group"
                  >
                    <button onClick={() => decrementHandler(item)}>-</button>
                    <button>{item.quantity}</button>
                    <button onClick={() => incrementHandler(item)}>+</button>
                  </div>
                </section>
              );
            })}
          </section>
          <CartSummary total={total} cart={cart} />
        </section>
      </main>
    </Layout>
  );
};

export default CartPage;
const CartSummary = ({ cart, total }) => {
  const originalTotalPrice =cart.length? cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  ):0;
  return (
    <section className="cartSummery">
      <h2>Cart Summery</h2>
      <div className="summeryItem">
        <p>Orginal total price</p>
        <p>{originalTotalPrice}</p>
      </div>
      <div className="summeryItem">
        <p>Orginal total price</p>
        <p>{originalTotalPrice - total}</p>
      </div>
      <div className="summeryItem net">
        <p>Net price</p>
        <p>{total}</p>
      </div>
      <Link to="/login?redirect=/checkout">
        <button className="btn btn__primary">Go to checkout</button>
      </Link>
    </section>
  );
};
