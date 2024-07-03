import React from 'react';
import './Return.css'; // Import the CSS file

const Return = () => {
  return (
    <div className="return-policy">
      <h1>Return Policy</h1>
      <p>Thank you for shopping with us. If you are not entirely satisfied with your purchase, we're here to help.</p>

      <h2>Returns</h2>
      <p>You have 30 calendar days to return an item from the date you received it. To be eligible for a return, your item must be unused and in the same condition that you received it. Your item must be in the original packaging. Your item needs to have the receipt or proof of purchase.</p>

      <h2>Refunds</h2>
      <p>Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item. If your return is approved, we will initiate a refund to your credit card (or original method of payment). You will receive the credit within a certain amount of days, depending on your card issuer's policies.</p>

      <h2>Shipping</h2>
      <p>You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.</p>

      <h2>Contact Us</h2>
      <p>If you have any questions on how to return your item to us, please contact us at <a href="/contact">Contact Us</a>.</p>
    </div>
  );
}

export default Return;
