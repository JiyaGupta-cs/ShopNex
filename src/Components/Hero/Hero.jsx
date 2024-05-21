import React, { useContext } from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";
import { ShopContext } from "../../Context/ShopContext";

const Hero = () => {
  const line = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const line1 = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  };
  const line2 = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding:"15px"
  };

  const { theme } = useContext(ShopContext);
  return (
    <div className={"hero_" + theme}>
      <div className="hero-left">
        <h2 style={line2} className={"h2h_" + theme}>
          NEW ARRIVALS ONLY
        </h2>
        <div>
          <div className="hero-hand-icon">
            <p style={line1} className={"ph_" + theme}>
              New{" "}
              <span>
                <img src={hand_icon} alt="" />
              </span>
            </p>
          </div>
          <p style={line} className={"ph_" + theme}>
            For Everyone <br/>
            Collections 
          </p>
         
         
          <p style={line}>
          <div  className="hero-latest-btn">
            <div  className={"div_" + theme}>
              Latest Collection{" "}
              <span>
                {" "}
                <img src={arrow_icon} alt="" />
              </span>{" "}
            </div>
          </div>
          </p>
         
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
