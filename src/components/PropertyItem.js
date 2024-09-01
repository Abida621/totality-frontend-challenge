import React, { useContext } from 'react';
import CartContext from '../CartContext';

const PropertyItem = ({ property }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card mb-3">
      <img src={property.image} className="card-img-top" alt={property.title} />
      <div className="card-body">
        <h5 className="card-title">{property.title}</h5>
        <p className="card-text">{property.description}</p>
        <p className="card-text"><strong>${property.price} per night</strong></p>
        <button className="btn btn-primary" onClick={() => addToCart(property)}>Book Now</button>
      </div>
    </div>
  );
};

export default PropertyItem;
