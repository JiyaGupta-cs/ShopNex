import React, { useContext } from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
import { ShopContext } from '../../Context/ShopContext'

const Offers = () => {
  const {theme}=useContext(ShopContext);
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1 className={`h1_${theme}`}>Exclusive</h1>
        <h1 className={`h1_${theme}`}>Offers For You</h1>
        <p className={`p_${theme}`}>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
