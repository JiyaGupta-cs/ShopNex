import React, { useContext } from 'react';

import { ShopContext } from '../Context/ShopContext';

const Offices = () => {
    const { officesDetails } = useContext(ShopContext);


    const sampleOfficesDetails = [
        {
            location: 'Headquarters',
            address: '456 Center Street, Cityville, Country',
            contact: '+1 (123) 789-4560',
        },
        {
            location: 'Branch Office 1',
            address: '789 East Avenue, Townsville, Country',
            contact: '+1 (456) 123-7890',
        },
        // Add more office details as needed
    ];

    const displayedOffices = officesDetails || sampleOfficesDetails;

    return (
        <div className="offices-container">
            <h2>Our Offices</h2>
            {displayedOffices.map((office, index) => (
                <div key={index} className="office-card">
                    <h3>{office.location}</h3>
                    <p>Address: {office.address}</p>
                    <p>Contact: {office.contact}</p>

                </div>
            ))}
        </div>
    );
};

export default Offices;
