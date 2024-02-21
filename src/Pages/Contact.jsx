import React from 'react';
import { Helmet } from 'react-helmet';
import './CSS/Contact.css';
import p1 from './1.png';

const Contact = () => {
  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Helmet>
      <section className="contact" id="contact">
      <h2 id="contact-heading" className="heading">
      <i className="fas fa-headset"></i> Contact  <span className="heading-span"> Us</span>
        </h2>

        <div className="container">
          <div className="content">
            <div className="image-box">
              <img draggable="false" src={p1} alt="" />
            </div>
            <div className="contact-form">
              <div className="form-group">
                <div className="field">
                <i className="fas fa-user"></i>
                  <input type="text" name="name" placeholder="Name" required />
                  
                </div>
                <div className="field">
                  <input type="text" name="email" placeholder="Email" required />
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="field">
                  <input type="text" name="phone" placeholder="Phone" />
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="message">
                  <textarea placeholder="Message" name="message" required></textarea>
                  <i className="fas fa-comment-dots"></i>
                </div>
              </div>
              <div className="button-area">
                <button type="submit">
                  Submit <i className="fa fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
