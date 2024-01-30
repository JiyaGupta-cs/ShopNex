import React, { useContext } from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Item = (props) => {
    const {theme}=useContext(ShopContext);
    return (
        <div className='item'>
            <Link to={`/product/${props.id}`}> <img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
            <p className={`pit_${theme}`}>{props.name}</p><p className={`pit_${theme}`}>{props.id}</p>
            <div className="item-prices">
                <div className={`item-price-new_${theme}`}>${props.new_price}</div>
                <div className={`item-price-old_${theme}`}>${props.old_price}</div>
            </div>
        </div>
    )
}

export default Item



