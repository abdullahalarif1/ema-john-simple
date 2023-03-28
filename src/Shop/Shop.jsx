import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import { addToDb, getShoppingCart } from "../utilities/fakedb";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart()
    console.log(storedCart)
  },[])

  // event handler and create new cart for order summary
  const addToCart = (product) => {
    console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
    // click korle local storage e store hobe tai addToDb import korlam
    addToDb(product.id)
  };


  // ------------------------ return -------------------------------
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
      <div className="order-summary" >
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
