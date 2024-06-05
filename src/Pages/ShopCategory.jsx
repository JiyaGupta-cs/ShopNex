import React, { useContext, useState } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product, theme } = useContext(ShopContext);
  const productsPerPage = 12;
  const [page, setPage] = useState(1);
  const [sorting, setSorting] = useState('');
  

  let filteredProducts;

  if (props.category === 'kids') {
    filteredProducts = all_product.filter(item => item.category === 'kid');
  } else {
    filteredProducts = all_product.filter(item => item.category === props.category);
    while (filteredProducts.length < 76) {
      filteredProducts = [...filteredProducts, ...filteredProducts];
    }
  }

  if (sorting === '0') {
    filteredProducts.sort((a, b) => a.new_price - b.new_price);
  } else if (sorting === '1') {
    filteredProducts.sort((a, b) => b.new_price - a.new_price);
  }

  const totalProducts = 76;

  const handleExploreMore = () => {
    setPage(prevPage => prevPage + 1);
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
        <div className={`shopcategory-sort_${theme}`}>
          Sort By
          <select
            name="shopcategory-sort"
            value={sorting}
            onChange={(e) => setSorting(e.target.value)}
          >
            <option value="0">Low to High</option>
            <option value="1">High to Low</option>
          </select>
          {/* <img src={dropdown_icon} alt='' /> */}
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
