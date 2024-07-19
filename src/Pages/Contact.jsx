

import React, { useContext, useState } from 'react';
import './CSS/Contact.css';
import { ShopContext } from '../Context/ShopContext';

const Contact = () => {
  const { theme } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    query: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, such as sending data to a server
    console.log('Form data submitted:', formData);
  };

  return (
    <div className={`container-my_${theme}`}>
      <h1 id="myheading">
        Contact Us
      </h1>
     
      

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="query">Tell us about your query</label>
          <textarea
            id="query"
            name="query"
            value={formData.query}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>
        This is the official page of Shopnix, where you can share all your queries, feedback, complaints, or any concern you may have about our products.
      </p>
      <p>
        In case of any grievance, don't hesitate to get in touch with us on our official contact number <a href="tel:+1234567890">123-456-7890</a>. Or you can write to us at <a href="mailto:xyz@gmail.com">xyz@gmail.com</a>.
      </p>
    </div>
  );
};

export default Contact;
