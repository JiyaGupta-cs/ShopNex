import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import cart_icon_dark from '../Assets/cart_icon_dark.png';
import moonIcon from '../Assets/dark_mode.png';
import sunIcon from '../Assets/light_mode.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const [icon, setIcon] = useState(cart_icon);
    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems, theme, setTheme } = useContext(ShopContext);

    useEffect(() => {
        if (theme === "dark") {
            setIcon(cart_icon_dark);
            document.getElementById("nav").classList.add("dark");
        } else {
            setIcon(cart_icon);
            document.getElementById("nav").classList.remove("dark");
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <div className={`navbar`} id="nav">
            <div className="nav-logo">
                <Link className="nav-logo-link" to="/">
                    <img src={logo} alt="ShopNex Logo" className="nav-logo-img" />
                    <p className={`nav-title ${theme}`}>ShopNex</p>
                </Link>
            </div>
            <ul className="nav-menu">
                {['shop', 'men', 'women', 'kids'].map((item) => (
                    <li key={item} className={`nav-item ${menu === item ? 'active' : ''}`} onClick={() => setMenu(item)}>
                        <Link to={`/${item === 'shop' ? '' : item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</Link>
                        {menu === item && <hr />}
                    </li>
                ))}
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button className='log_btn'>Login</button></Link>
                <Link to='/cart'><img src={icon} alt="Cart" className='cart' /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
                <button onClick={toggleTheme} className={`toggle-theme ${theme}`}>
                    <img src={theme === 'light' ? sunIcon : moonIcon} alt="Theme Toggle" />
                </button>
            </div>
        </div>
    );
}

export default Navbar;
