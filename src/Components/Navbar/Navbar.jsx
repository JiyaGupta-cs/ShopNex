import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import cart_icon_dark from "../Assets/cart_icon_dark.png";
import moonIcon from "../Assets/dark_mode.png";
import sunIcon from "../Assets/light_mode.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import Hamburger from "../../Components/Assets/hamburger_logo.svg";
import XMark from "../../Components/Assets/x_mark_icon.svg";

const Navbar = () => {
  const [icon, setIcon] = useState(cart_icon);
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems, theme, setTheme } = useContext(ShopContext);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const toggle = () => {
    const navMenu = document.querySelector(".nav-menu");
    if (theme === "dark") {
      setTheme("light");
      setIcon(cart_icon_dark);
      const dnav = document.getElementById("nav");
      dnav.classList.add("dark");
      if (window.innerWidth <= 768) {
        navMenu.style.backgroundColor = "#171717";
      } else if (window.innerWidth > 768) {
        navMenu.style.backgroundColor = "transparent";
      }
    } else {
      setTheme("dark");
      setIcon(cart_icon);
      const dnav = document.getElementById("nav");
      dnav.classList.remove("dark");
      navMenu.style.backgroundColor = "white";
    }
  };

  return (
    <div className={`navbar`} id="nav">
      <div className="nav-logo">
        <Link className="nav-logo-link" to="/">
          <img src={logo} alt="ShopNex Logo" style={{ marginRight: "10px" }} />
          <p className={`pnav_${theme}`}>ShopNex</p>
        </Link>
        {click ? (
          <div className="nav-icon" onClick={handleClick}>
            <img src={XMark} alt="menu icon" />
          </div>
        ) : (
          <div className="nav-icon" onClick={handleClick}>
            <img src={Hamburger} alt="menu icon" />
          </div>
        )}
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li onClick={() => setMenu("shop")}>
          <Link to="/" onClick={handleClick}>
            Shop
          </Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link to="/men" onClick={handleClick}>
            Men
          </Link>
          {menu === "men" && <hr />}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link to="/women" onClick={handleClick}>
            Women
          </Link>
          {menu === "women" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids" onClick={handleClick}>
            Kids
          </Link>
          {menu === "kids" && <hr />}
        </li>
        <li>
          <Link to="/login" onClick={handleClick}>
            <button className={click ? "log_btn_mobile" : "log_btn"}>
              Login
            </button>
          </Link>
        </li>
        <li>
          <Link to="/cart" onClick={handleClick}>
            <img src={icon} alt="cart" className="cart" />
            <div className="nav-cart-count">{getTotalCartItems()}</div>
          </Link>
        </li>
        <li>
          <button onClick={toggle} className={`toggle_${theme} change`}>
            {theme === "light" ? (
              <img src={sunIcon} alt="sun" />
            ) : (
              <img src={moonIcon} alt="moon" />
            )}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
