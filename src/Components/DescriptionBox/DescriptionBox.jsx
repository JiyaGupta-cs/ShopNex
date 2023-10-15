import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className='descriptionbox-description'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat iste enim numquam ipsum deserunt molestiae repellat quis quo dignissimos vitae, hic asperiores adipisci. Saepe animi ea facilis voluptas corrupti! Voluptatem!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, nam!</p>
      </div>
    </div>
  )
}

export default DescriptionBox
