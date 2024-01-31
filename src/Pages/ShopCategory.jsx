import React, { useContext, useState } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const productsPerPage = 12;
  const [page, setPage] = useState(1);

  let filteredProducts;

  if (props.category === 'kids') {
    filteredProducts = all_product.filter(item => item.category === 'kids');
  } else {
    filteredProducts = all_product.filter(item => item.category === props.category);
  }
  const totalProducts = props.category === 'kids' ? filteredProducts.length : 76;
  while (filteredProducts.length < totalProducts) {
    filteredProducts.push(...filteredProducts);
  }

  const handleExploreMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const startIndex = (page - 1) * productsPerPage;
  let endIndex = startIndex + productsPerPage;

  endIndex = Math.min(endIndex, totalProducts);

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt='' />
      <div className='shopcategory-indexSort'>
        <p>
          <span>{`Showing ${startIndex + 1}-${endIndex}`}</span> out of {totalProducts} products
        </p>
        <div className='shopcategory-sort'>
          Sort By <img src={dropdown_icon} alt='' />
        </div>
      </div>
      <div className='shopcategory-products'>
        {filteredProducts.slice(startIndex, endIndex).map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
      {endIndex < totalProducts && (
        <div className='shopcategory-loadmore' onClick={handleExploreMore}>
          Explore More
        </div>
      )}
    </div>
  );
};

export default ShopCategory;
