import React, { useContext } from 'react'
import './DescriptionBox.css'
import { ShopContext } from '../../Context/ShopContext'

const DescriptionBox = () => {
  const {theme}=useContext(ShopContext);
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className={`descriptionbox-nav-box dbp_${theme}`}>Description</div>
        <div className={`descriptionbox-nav-box fade dbp_${theme}`}>Reviews (122)</div>
      </div>
      <div className='descriptionbox-description'>
        <p className={`dbp_${theme}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat iste enim numquam ipsum deserunt molestiae repellat quis quo dignissimos vitae, hic asperiores adipisci. Saepe animi ea facilis voluptas corrupti! Voluptatem!</p>
        <p className={`dbp_${theme}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, nam!</p>
      </div>
    </div>
  )
}

export default DescriptionBox
