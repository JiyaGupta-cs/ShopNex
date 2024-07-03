import React, { useContext } from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer = () => {
  const { theme } = useContext(ShopContext);
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="footer">
      <div className="footer-logo">
        <Link className="nav-logo-link" to="/" onClick={handleLogoClick}>
          <img src={footer_logo} alt="ShopNex Logo" />
          <p className={`footer_${theme}`}>ShopNex</p>
        </Link>
      </div>
      <ul className={"footer-links_" + theme}>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>
          {" "}
          <Link className={`link_${theme}`} to="/about " onClick={scrollToTop}>
            About
          </Link>
        </li>
        <li>
          {" "}
          <Link className={`link_${theme}`} to="/contact" onClick={scrollToTop}>
            Contact Us
          </Link>
        </li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className={`footer-copyright_${theme}`}>
        <hr className={`hr_${theme}`} />
        <p>Copyright @ {new Date().getFullYear()} - All Rights Reserved</p>
        <div className="footer-links">
        <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
        <a href="/terms-of-service" target="_blank" rel="noopener noreferrer">Terms of Service</a>
        <a href="/return-policy" target="_blank" rel="noopener noreferrer">Return Policy</a>
        <a href="/shipping-policy" target="_blank" rel="noopener noreferrer">Shipping Policy</a>
        <a href="/cookie-policy" target="_blank" rel="noopener noreferrer">Cookie Policy</a>
        
      </div>
      </div>
    </div>
  );
};

export default Footer;
