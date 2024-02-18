import React, { useContext } from 'react';
import './CSS/Contact.css'
import { ShopContext } from '../Context/ShopContext';

const Contact = () => {
  const {theme}=useContext(ShopContext);
  return (
    <div className={"container-my_"+theme}>
      <h1 id="myheading">
        Contact Us
      </h1>
      <p>
      This is the official page of Shopnix, where you can share all your queries, feedback, complaints, or any concern you may have about our products.
      </p>
      <p>
      In Case of any grievance, don't hesitate to get in touch with us on our official contact number xxxxxxxxxx. Or you can write to us at xyz@gmail.com.
      </p>

      </div>
  );
};

export default Contact;