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

    // ✅ Retrieve Theme from Local Storage on Page Load
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light"; 
        setTheme(savedTheme); 
        if (savedTheme === "dark") {
            setIcon(cart_icon_dark);
            document.getElementById("nav").classList.add("dark");
        } else {
            setIcon(cart_icon);
            document.getElementById("nav").classList.remove("dark");
        }
    }, [setTheme]);

    // ✅ Toggle Theme & Save to Local Storage
    const toggle = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);  // ✅ Store theme in localStorage

        if (newTheme === "dark") {
            setIcon(cart_icon_dark);
            document.getElementById("nav").classList.add("dark");
        } else {
            setIcon(cart_icon);
            document.getElementById("nav").classList.remove("dark");
        }
    };

    return (
        <div className={`navbar`} id="nav">
            <div className="nav-logo">
                <Link className="nav-logo-link" to="/">
                    <img src={logo} alt="ShopNex Logo" style={{ marginRight: '10px' }} />
                    <p className={`pnav_${theme}`}>ShopNex</p>
                </Link>
            </div>
            <ul className="nav-menu">
                <li className={menu === "shop" ? "active" : ""} onClick={() => { setMenu("shop") }}>
                    <Link to='/'>Shop</Link>
                    {menu === "shop" ? <hr /> : <></>}
                </li>
                <li className={menu === "men" ? "active" : ""} onClick={() => { setMenu("men") }}>
                    <Link to='/men'>Men</Link>
                    {menu === "men" ? <hr /> : <></>}
                </li>
                <li className={menu === "women" ? "active" : ""} onClick={() => { setMenu("women") }}>
                    <Link to='/women'>Women</Link>
                    {menu === "women" ? <hr /> : <></>}
                </li>
                <li className={menu === "kids" ? "active" : ""} onClick={() => { setMenu("kids") }}>
                    <Link to='/kids'>Kids</Link>
                    {menu === "kids" ? <hr /> : <></>}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button className='log_btn'>Login</button></Link>
                <Link to='/cart'><img src={icon} alt="Cart Icon" className='cart' /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
                <div className='dark_btn'>
                    <button onClick={toggle} className={`toggle_${theme} change`}>
                        {theme === 'light' ? <img src={sunIcon} alt="Light Mode" /> : <img src={moonIcon} alt="Dark Mode" />}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
