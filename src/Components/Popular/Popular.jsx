import React, { useContext } from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'
import { ShopContext } from '../../Context/ShopContext'

const Popular = () => {
    const{theme}=useContext(ShopContext);
    return (
        <div className='popular'>
            <h1 className={`h1p_${theme}`}>POPULAR IN WOMEN</h1>
            <hr className={`hrp_${theme}`} />
            <div className="popular-item">
                {data_product.map((item,i)=>{
                    return<Item key={i}  id={item.id}   name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default Popular
