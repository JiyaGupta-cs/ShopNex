import React from 'react';
import './Shipping.css'; // Import the CSS file

const Shipping = () => {
  return (
    <div className="shipping-policy">
      <h1>Shipping Policy</h1>
      <p>Welcome to our Shipping Policy page. Here you will find all the necessary information regarding our shipping methods, delivery times, and costs.</p>

      <h2>Shipping Methods</h2>
      <p>We offer a variety of shipping options to meet your needs. The available shipping methods will be displayed at checkout.</p>
      <ul>
        <li>Standard Shipping: 5-7 business days</li>
        <li>Expedited Shipping: 2-3 business days</li>
        <li>Overnight Shipping: 1 business day</li>
      </ul>

      <h2>Delivery Times</h2>
      <p>Delivery times are estimates and commence from the date of shipping, rather than the date of order. Delivery times are to be used as a guide only and are subject to the acceptance and approval of your order.</p>

      <h2>Shipping Costs</h2>
      <p>Shipping costs are calculated based on the weight of your order and the selected shipping method. The total cost will be displayed at checkout.</p>

      <h2>International Shipping</h2>
      <p>We offer international shipping to select countries. Please note that international shipments may be subject to additional customs fees, import duties, and taxes. These charges are the responsibility of the recipient.</p>

      <h2>Tracking Your Order</h2>
      <p>Once your order has been shipped, you will receive a confirmation email with a tracking number. You can use this number to track your order on the shipping carrier's website.</p>

      <h2>Contact Us</h2>
      <p>If you have any questions or concerns regarding our shipping policy, please feel free to <a href="/contact">contact us</a>.</p>
    </div>
  );
}

export default Shipping;
