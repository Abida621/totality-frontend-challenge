import React, { useContext, useState } from 'react';
import CartContext from '../CartContext';

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    paymentDetails: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., sending data to a server
    console.log('Booking Details:', formData, cart);
    alert('Booking Successful!');
  };

  return (
    <div className="container mt-4">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="paymentDetails" className="form-label">Payment Details</label>
          <input
            type="text"
            className="form-control"
            id="paymentDetails"
            name="paymentDetails"
            value={formData.paymentDetails}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">Complete Booking</button>
      </form>
    </div>
  );
};

export default Checkout;
