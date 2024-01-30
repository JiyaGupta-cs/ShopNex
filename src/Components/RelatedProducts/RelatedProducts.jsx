import React, { useContext } from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'
import { ShopContext } from '../../Context/ShopContext'

const RelatedProducts = () => {
  const {theme}=useContext(ShopContext);
  return (
    <div className='relatedproducts'>
      <h1 className={`h1_${theme}`}>Related Products</h1>
      <hr className={`hr_${theme}`}/>
      <div className="relatedproducts-item">
        {data_product.map((item,i)=>{
            return <Item key={i}   id={item.id}  name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default RelatedProducts
