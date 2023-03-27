import React, { useEffect, useState } from "react";
import Products from "../Products/Products";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // event handler and create new cart for order summary
  const addToCart = (product) => {
    console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="shop-container">
      
      {/*--------------- products----------------- */}
      <div className="product-container">
        {
        products.map((product) => (
          <Products
            product={product}
            key={product.id}
            addToCart={addToCart}
          ></Products>
        ))
        }
      </div>

      {/*--------------- order summary------------------ */}
      <div className="order-summary" style={{ textAlign: "center" }}>
        <h3>Order Summary</h3>
        <h5>Cart : {cart.length}</h5>
      </div>
    </div>
  );
};

export default Shop;
