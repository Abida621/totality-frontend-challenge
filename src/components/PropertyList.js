import React from 'react';
import PropertyItem from './PropertyItem';

const PropertyList = () => {
  const properties = [
    { id: 1, image: '../images/image1.jpg', title: 'Beach House', description: 'Beautiful beach house.', price: 200 },
    { id: 2, image: '../images/image2.jpg', title: 'Mountain Cabin', description: 'Cozy cabin in the mountains.', price: 150 },
    { id: 2, image: '../images/image3.jpg', title: 'Mountain Lodge ', description: 'Mountain Lodge in Winter.', price: 250 },
    // Add more properties as needed
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        {properties.map(property => (
          <div className="col-md-4" key={property.id}>
            <PropertyItem property={property} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
