import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const cart = useLoaderData();
    console.log(cart);
    return (
        <div className='shop-container'>
           <div className="product-container">
            <h3>Product: {cart.length}</h3>
            <div>
                
            </div>
           </div>
           <div className="order-summary">
              <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Orders;