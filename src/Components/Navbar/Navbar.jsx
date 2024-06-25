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

    // Function to toggle theme
    const toggleTheme = () => {
        if (theme === "dark") {
            setTheme("light");
            setIcon(cart_icon_dark);
            localStorage.setItem('theme', 'light'); // Store theme preference in localStorage
        } else {
            setTheme("dark");
            setIcon(cart_icon);
            localStorage.setItem('theme', 'dark'); // Store theme preference in localStorage
        }
    };

    // Effect to set theme when component mounts
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
            if (storedTheme === 'dark') {
                setIcon(cart_icon_dark);
            } else {
                setIcon(cart_icon);
            }
        }
    }, []); // Empty dependency array ensures this effect runs only once on mount

    // Update theme-related classes dynamically
    useEffect(() => {
        const nav = document.getElementById("nav");
        if (theme === 'dark') {
            nav.classList.add('dark');
        } else {
            nav.classList.remove('dark');
        }
    }, [theme]); // Run this effect whenever theme changes

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
                <Link to='/cart'><img src={icon} alt="" className='cart' /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
                <div className='dark_btn'>
                    <button onClick={toggleTheme} className={`toggle_${theme} change`}>
                        {theme === 'light' ? <img src={sunIcon} alt="Light Mode" /> : <img src={moonIcon} alt="Dark Mode" />}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
