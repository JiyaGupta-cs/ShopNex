import React, { useState } from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validate = () => {
    const approvedDomains = [".com", ".in", ".org", ".net", ".edu"];
    const regex = /^([a-zA-Z0-9._]+)@([a-zA-Z0-9-]+\.[a-zA-Z]{2,})$/;

    if (regex.test(email)) {
      const domain = email.split("@")[1];
      const isValidDomain = approvedDomains.some((approvedDomain) =>
        domain.endsWith(approvedDomain)
      );

      if (isValidDomain) {
        setMessage("Subscribed to the Newsletter!");
      } else if(!isValidDomain){
        setMessage(
          "Please enter a valid email with an approved domain"
        );
      }
      else {
        setMessage("");
      }
    } else if(!regex.test(email) && email != "") {
      setMessage("Please enter a valid email ID");
    }
    else{
      setMessage("");
    }
  };

  // const handleSubscribe = () => {
  //   const isValid = validate();
  //   if (isValid) {
  //     console.log("Subscription successful!");
  //     setEmail(""); // Clear email after successful subscription
  //   }
  // };

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to Our NewsLetter and Stay Updated</p>
      <div>
        <input
          type="email"
          placeholder="Your Email Id"
          value={email}
          onChange={handleOnChange}
        />
        <button onClick={validate}>Subscribe</button>
        
      </div>
      {message && (
          <p
            className="msg"
            style={{ color: message.includes("Subscribed") ? "green" : "red" }}
          >
            {message}
          </p>
        )}
    </div>
  );
};

export default NewsLetter;
