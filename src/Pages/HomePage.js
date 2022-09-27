import Layout from "../Layout/Layout";
import * as data from "../data";
const HomePage = () => {
  const addProductHandler = (product) => {
    console.log(product);
  };
  return (
    <Layout>
      <main className="container">
        <section className="products">
          {data.products.map((product) => {
            return (
              <section className="product">
                <div className="product__img">
                  <img src={product.image} alt="img-shoes" />
                </div>
                <div className="product__description">
                  <p>{product.name}</p>
                  <p>${product.price}</p>
                  <button
                    onClick={() => addProductHandler(product)}
                    className="btn btn__primary"
                  >
                    Add to Cart
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
