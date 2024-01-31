import React, { useContext } from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
import { ShopContext } from '../../Context/ShopContext';

const Breadcrum = (props) => {
    const {product}=props;
    const {theme}=useContext(ShopContext);
  return (
    <div className={`breadcrum_${theme}`}>
      HOME <img src={arrow_icon} alt="" />SHOP<img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum
