import React from "react";
import "./NewsLetter.css";
import { Fade } from "react-awesome-reveal";

const NewsLetter = () => {
  return (
      <Fade direction="down">
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to Our NewsLetter and Stay Updated</p>
      <div>
        <input type="email" placeholder="Your Email Id" />
        <button>Subscribe</button>
      </div>
    </div>
      </Fade>
  );
};

export default NewsLetter;
