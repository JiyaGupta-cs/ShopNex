import React, { useContext } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import cart_icon_dark from '../Assets/cart_icon_dark.png';
import moonIcon from '../Assets/dark_mode.png';
import sunIcon from '../Assets/light_mode.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const { getTotalCartItems, theme, setTheme, activeMenu, setActiveMenu } = useContext(ShopContext);

  const toggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={`navbar`} id="nav">
      <div className="nav-logo">
        <Link className="nav-logo-link" to="/" onClick={() => setActiveMenu("shop")}>
          <img src={logo} alt="ShopNex Logo" style={{ marginRight: '10px' }} />
          <p className={`pnav_${theme}`}>ShopNex</p>
        </Link>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setActiveMenu("shop")}>
          <Link to='/'>Shop</Link>
          {activeMenu === "shop" && <hr className="active" />}
        </li>
        <li onClick={() => setActiveMenu("men")}>
          <Link to='/men'>Men</Link>
          {activeMenu === "men" && <hr className="active" />}
        </li>
        <li onClick={() => setActiveMenu("women")}>
          <Link to='/women'>Women</Link>
          {activeMenu === "women" && <hr className="active" />}
        </li>
        <li onClick={() => setActiveMenu("kids")}>
          <Link to='/kids'>Kids</Link>
          {activeMenu === "kids" && <hr className="active" />}
        </li>
        <li onClick={() => setActiveMenu("cart")}>
          <Link to='/cart'>
            <img src={theme === "dark" ? cart_icon : cart_icon_dark} alt="" className='cart' />
            {activeMenu === "cart" && <hr className="active" />}
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button className='log_btn' onClick={() => setActiveMenu("")}>Login</button></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
        <div className='dark_btn'>
          <button onClick={toggle} className={`toggle_${theme} change`}>
            {theme === 'light' ? <img src={sunIcon} alt="sun icon" /> : <img src={moonIcon} alt="moon icon" />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
