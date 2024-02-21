import React, { useContext } from 'react'
import './NewCollections.css'
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'
import { ShopContext } from '../../Context/ShopContext'

const LatestCollection = () => {
    const {theme}=useContext(ShopContext);
    return (
        <div className='latest-collections'>
            <h1 className={`h1_${theme}`}>LATEST COLLECTIONS</h1>
            <hr className={`hr_${theme}`} />
            <div className="collections">
            {new_collection.map((item,i)=>{
                return <Item key={i}   id={item.id}  name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
            </div>

        </div>
    )
}

export default LatestCollection
