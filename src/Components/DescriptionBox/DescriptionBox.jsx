

import React, { useContext, useState } from 'react';
import './DescriptionBox.css';
import { ShopContext } from '../../Context/ShopContext';

const DescriptionBox = () => {
  const { theme } = useContext(ShopContext);
  const [showReviews, setShowReviews] = useState(false);

  const toggleReviews = () => {
    setShowReviews(!showReviews);
  };

  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className={`descriptionbox-nav-box dbp_${theme}`} onClick={() => setShowReviews(false)}>
          Description
        </div>
        <div className={`descriptionbox-nav-box dbp_${theme}`} onClick={toggleReviews}>
          Reviews
        </div>
      </div>
      <div className='descriptionbox-description'>
      
        {!showReviews && (
          <>
            <p className={`dbp_${theme}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat iste enim numquam ipsum deserunt molestiae repellat quis quo dignissimos vitae, hic asperiores adipisci. Saepe animi ea facilis voluptas corrupti! Voluptatem!</p>
            <p className={`dbp_${theme}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, nam!</p>
          </>
        )}

        
        {showReviews && (
          <p className={`dbp_${theme}`}>
            Absolutely Stunning Dress!

            I recently purchased this dress for a special occasion, and I couldn't be happier with my choice. The fit is incredibly flattering, and the quality of the fabric is outstanding. The attention to detail in the design is evident, and I received numerous compliments throughout the event. The color is vibrant and true to the online images, and the dress is as comfortable as it is elegant. It's the perfect combination of style and sophistication. I highly recommend this dress to anyone looking for a show-stopping outfit for their next event!
          </p>
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;
