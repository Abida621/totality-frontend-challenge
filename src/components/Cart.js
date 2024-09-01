import React, { useContext } from 'react';
import CartContext from '../CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      <ul className="list-group">
        {cart.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>{item.title}</h5>
              <p>${item.price} per night</p>
            </div>
            <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3 className="mt-4">Total: ${calculateTotal()}</h3>
    </div>
  );
};

export default Cart;
