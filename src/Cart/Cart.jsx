import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  //   const cart = props.cart;

  // total calculation
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    product.quantity = product.quantity || 1;
    
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  // shotkora ba % ber korar system
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <>
      <h3 style={{ textAlign: "center" }}>Order Summary</h3>
      <div className="cart-info" style={{ paddingLeft: "10px" }}>
        <h5>Selected Items Quantity : {quantity}</h5>
        <p>Total Price: ${totalPrice}</p>
        <p>Total Shipping: ${totalShipping}</p>
        <p>Tax: ${tax}</p>
        <p style={{ fontSize: "21px" }}>Grand Total: ${grandTotal}</p>
      </div>
    </>
  );
};

export default Cart;
