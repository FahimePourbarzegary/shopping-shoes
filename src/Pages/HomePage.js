import Layout from "../Layout/Layout";
import * as data from "../data";
import { useCart, useCartActions } from "../Providers/CartProvider";
import { checkInCart } from "../utils/checkInCart";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
const HomePage = () => {
  const { cart } = useCart();
  const dispatch = useCartActions();
  const addProductHandler = (product) => {
    if (!checkInCart(cart, product)) {
      toast.success(`${product.name} added to Cart`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch({ type: "ADD_TO_CART", payload: product });
    }
  };
  return (
    <Layout>
      <main className="container">
        <section className="products">
          {data.products.map((product) => {
            return (
              <section className="product" key={product.id}>
                <div className="product__img">
                  <img src={product.image} alt="img-shoes" />
                </div>
                <div className="product__description">
                  <p>{product.name}</p>
                  <div>
                    <p style={{ textDecoration: "line-through", color: "red" }}>
                      ${product.price}
                    </p>
                    <p>${product.offPrice}</p>
                  </div>
                  <button
                    onClick={() => addProductHandler(product)}
                    className="btn btn__primary"
                  >
                    {checkInCart(cart, product) ? (
                      <NavLink to="/cart">In cart</NavLink>
                    ) : (
                      "ADD to cart"
                    )}
                  </button>
                </div>
              </section>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;
