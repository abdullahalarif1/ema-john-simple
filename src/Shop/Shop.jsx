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

  // data outside interrogation korar jonno used useEffect()
  useEffect(() => {
    // step 2: get id
    const storedCart = getShoppingCart();
    // ja ja korsi shob array te dukaiya save korte hobe
    const savedCart = [];
    // object tai loop korte for in lagbe
    for (const id in storedCart) {
      // step 3: get the product from products by using id
      const addedProduct = products.find((product) => product.id === id);

      if (addedProduct) {
        // step 4: get quantity of the product
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // step 5: ja ja korsi shob push koira dilam [] array er vitor
        savedCart.push(addedProduct);
      }
    }
    // step 6:
    setCart(savedCart);
  }, [products]);

  // event handler and create new cart for order summary
  const addToCart = (product) => {
    console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
    // click korle local storage e store hobe tai addToDb import korlam
    // step : 1
    addToDb(product.id);
  };

  // ------------------------ return -------------------------------
  return (
    <div className="shop-container">
      {/*--------------- products----------------- */}
      <div className="product-container">
        {products.map((product) => (
          <Products
            product={product}
            key={product.id}
            addToCart={addToCart}
          ></Products>
        ))}
      </div>

      {/*--------------- order summary------------------ */}
      <div className="order-summary">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
