import React from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import OrderReview from "../OrderReview/OrderReview";

const Orders = () => {
  const cart = useLoaderData();
  console.log(cart);
  return (
    <div className="shop-container">
      <div style={{margin:'20px auto'}}>
        <h3>Product: {cart.length}</h3>
        <div>
          {cart.map((cart) => (
            <OrderReview product={cart}></OrderReview>
          ))}
        </div>
        <div></div>
      </div>
      <div className="order-summary">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
