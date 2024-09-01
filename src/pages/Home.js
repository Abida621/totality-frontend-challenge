import React from 'react';
import PropertyList from '../components/PropertyList';

const Home = () => {
  return (
    <div className="container">
      <h1 className="my-4">Available Properties</h1>
      <PropertyList />
    </div>
  );
};

export default Home;
