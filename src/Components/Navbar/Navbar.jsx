import React, { useContext, useState } from "react";
import "./Navbar.css";
import Hamburger from "./Hamburger";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () =>{
    setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link className="nav-logo-link" to="/">
          <img src={logo} alt="ShopNex Logo" style={{ marginRight: '10px' }} />
          <p>ShopNex</p>
        </Link>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/">Shop</Link>
          {menu == "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="/men">Men</Link>
          {menu == "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="/women">Women</Link>
          {menu == "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids">Kids</Link>
          {menu == "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img className="cart-img" src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
      <div className="hamburger" onClick={toggleHamburger}>
        <Hamburger isOpen={hamburgerOpen}/>
      </div>

      <style>
        {`
      .hamburger{
        display: none;
      }
      @media (max-width: 600px){
        body{
          overflow: ${hamburgerOpen ? 'hidden' : 'auto'};
          height: 100%;
        }
        .navbar{
          display: grid;
          grid-template-columns: 5fr 1fr 1.5fr;
          margin-top:10px;
          padding: 0px;
      }
        .hamburger{
            display: flex;
            margin-left:20px;
            margin-right:${hamburgerOpen? '60px' : '10px'};
            margin-top:5px;
            z-index: 10;
        }
        .nav-menu{
            flex-direction: column;
            gap: 0px;
            font-size: 22px;
            margin-top:0px;
            margin-right: 0px;
            display: ${hamburgerOpen? 'inline' : 'none'};
            background-color:#fde1ff;
            height:100vh;
            width:92vw;
            position:fixed;
        }
        .nav-menu li{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 18px;
          cursor: pointer;
          margin-bottom:50px;
          margin-top:70px;
      }
      .nav-menu hr{
          width: 40%;
      }
      .nav-logo{
          flex-direction: row;
          position:flex-start;
          margin-left:20px;
          gap: 4px;
      }
      .nav-logo p{
          font-size: 28px;
      }
      .nav-login-cart{
          gap:18px;
      }
      .nav-login-cart button{
          display: ${hamburgerOpen? 'inline-block' : 'none'};
          width: 100px;
          height: 42px;
          font-size: 16px;
          margin-right:0px;
          z-index:20;
      }
      .cart-img{
          width: 3.2rem;
          margin-right: 58px;
      }
        }
      `}
      </style>
    </div>
  );
};

export default Navbar;
