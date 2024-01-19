import React, { useState, useEffect } from "react";
import "./ScrollUpButton.css";
import { FaArrowUp } from "react-icons/fa6";

const TOP_OFFSET = 300;

const ScrollUpButton = () => {
  const [background, setBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setBackground(true);
      } else {
        setBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCLick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {background ? (
        <div className="scrollup" onClick={handleCLick}>
          <FaArrowUp size={25} />
        </div>
      ) : (
        <div className="hide"></div>
      )}
    </>
  );
};

export default ScrollUpButton;
