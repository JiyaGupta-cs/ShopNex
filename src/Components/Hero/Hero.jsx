import React, { useContext } from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
import { ShopContext } from '../../Context/ShopContext'

const Hero = () => {
    const {theme}=useContext(ShopContext)
    return (
        <div className={'hero_'+theme}>
            <div className="hero-left">
                <h2  className={'h2h_'+theme}>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p className={'ph_'+theme}>New</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p className={'ph_'+theme}>Collections</p>
                    <p className={'ph_'+theme}>For Everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div className={'div_'+theme}>Latest Collection</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="" />
            </div>
        </div>
    )
}

export default Hero
