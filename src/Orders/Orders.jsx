import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import OrderReview from "../OrderReview/OrderReview";
import { removeFromDb } from "../utilities/fakedb";

const Orders = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);
  //   console.log(savedCart);

  // remove Cart
  const removeCart = (id) => {
    const rmvCart = cart.filter((cart) => cart._id !== id);
    setCart(rmvCart);
    removeFromDb(id);
    console.log(id);
  };

  return (
    <div className="shop-container">
      <div style={{ margin: "20px auto" }}>
        {cart.map((cart) => (
          <OrderReview removeCart={removeCart} product={cart}></OrderReview>
        ))}
      </div>
      <div className="order-summary">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
