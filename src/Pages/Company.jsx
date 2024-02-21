

import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

const Company = () => {
  const { companyDetails } = useContext(ShopContext);

  // Sample companyDetails object
  const sampleCompanyDetails = {
    name: 'ShopNex',
    address: '123 Main Street, Cityville, Country',
    contact: '+1 (123) 456-7890',
 
  };

 
  const { name, address, contact } = companyDetails || sampleCompanyDetails;

  return (
    <div className="company-container">
      <h2>{name}</h2>
      <p>Address: {address}</p>
      <p>Contact: {contact}</p>
     
    </div>
  );
};

export default Company;
