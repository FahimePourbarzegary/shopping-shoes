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
                <section className="cartItem">
                  <div className="cartItem__img">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div>{item.name}</div>
                  <div>{item.quantity}</div>
                  <div>{item.price * item.quantity}$</div>
                  <div>
                    <button onClick={() => decrementHandler(item)}>-</button>

                    <button onClick={() => incrementHandler(item)}>+</button>
                  </div>
                </section>
              );
            })}
          </section>
          <section className="cartSummary">
            <h2>Cart Summary</h2>
            <div>{total}$</div>
          </section>
        </section>
      </main>
    </Layout>
  );
};

export default CartPage;
