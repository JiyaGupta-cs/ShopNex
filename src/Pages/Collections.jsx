import React, { useState } from 'react';
import './CSS/Collections.css';

const products = [
  { id: 1, name: 'T-shirt', price: 15, image: 'https://img.freepik.com/premium-psd/young-man-oversize-t-shirt-mockup-psd-template-your-design_34168-2869.jpg?w=740', tag: 'New', category: 'For Men', type: 'Clothing' },
  { id: 2, name: 'Jeans', price: 40, image: 'https://i.pinimg.com/564x/b7/b1/47/b7b147b7761899ad568d3e528459b2b1.jpg', category: 'For Men', type: 'Clothing' },
  { id: 3, name: 'Dress', price: 60, image: 'https://i.pinimg.com/564x/29/f9/81/29f9811257d1375916f40b9329d1e4f3.jpg', tag: 'New', category: 'For Women', type: 'Clothing' },
  { id: 4, name: 'Skirt', price: 25, image: 'https://i.pinimg.com/564x/04/ee/7c/04ee7ca804f30a32ee93253e0f4fa6e9.jpg', category: 'For Women', type: 'Clothing' },
  { id: 5, name: 'Dress', price: 60, image: 'https://i.pinimg.com/564x/e1/24/30/e124303a2d9ed4dbcb77937d3a975078.jpg', tag: 'New', category: 'For Women', type: 'Clothing' },
];

const Collections = () => {
  const [categoryFilter, setCategoryFilter] = useState('');
  const [detailsFilter, setDetailsFilter] = useState([]);
  const [clothingFilter, setClothingFilter] = useState([]);
  const [priceSort, setPriceSort] = useState('default');

  const handleFilterChange = (filterType, value) => {
    if (filterType === 'category') {
      setCategoryFilter(value);
    } else if (filterType === 'details') {
      setDetailsFilter(prevState =>
        prevState.includes(value) ? prevState.filter(item => item !== value) : [...prevState, value]
      );
    } else if (filterType === 'clothing') {
      setClothingFilter(prevState =>
        prevState.includes(value) ? prevState.filter(item => item !== value) : [...prevState, value]
      );
    }
  };

  const filteredProducts = products.filter(product => {
    if (categoryFilter && product.category !== categoryFilter) return false;
    if (clothingFilter.length && product.type === 'Clothing' && !clothingFilter.includes(product.name)) return false;
    if (detailsFilter.length && product.tag && !detailsFilter.includes(product.tag)) return false;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (priceSort === 'low') return a.price - b.price;
    if (priceSort === 'high') return b.price - a.price;
    return 0;
  });

  return (
    <div className="collection-page">
      <header className="collection-header">
        <h1>collection</h1>
      </header>
      <div className="collection-container">
        <aside className="collection-filters">
          <h2>FILTER</h2>
          <div className="filter-category">
            <h3>Category</h3>
            <label>
              <input type="radio" name="category" onChange={() => handleFilterChange('category', '')} /> All
            </label>
            <label>
              <input type="radio" name="category" onChange={() => handleFilterChange('category', 'For Women')} /> For Women
            </label>
            <label>
              <input type="radio" name="category" onChange={() => handleFilterChange('category', 'For Men')} /> For Men
            </label>
          </div>
          <div className="filter-details">
            <h3>Details</h3>
            <label>
              <input type="checkbox" onChange={() => handleFilterChange('details', 'Discounts')} /> Discounts
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFilterChange('details', 'New')} /> New
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFilterChange('details', 'Popular')} /> Popular
            </label>
          </div>
          <div className="filter-clothing">
            <h3>Clothing</h3>
            <label>
              <input type="checkbox" onChange={() => handleFilterChange('clothing', 'T-shirt')} /> T-shirt
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFilterChange('clothing', 'Jeans')} /> Jeans
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFilterChange('clothing', 'Dress')} /> Dress
            </label>
            <label>
              <input type="checkbox" onChange={() => handleFilterChange('clothing', 'Skirt')} /> Skirt
            </label>
          </div>
          <div className="filter-sort">
            <h3>Sort Price</h3>
            <label>
              <input type="radio" name="price" onChange={() => setPriceSort('default')} /> Default
            </label>
            <label>
              <input type="radio" name="price" onChange={() => setPriceSort('low')} /> Low
            </label>
            <label>
              <input type="radio" name="price" onChange={() => setPriceSort('high')} /> High
            </label>
          </div>
        </aside>
        <main className="collection-products">
          {sortedProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} height={"100%"} width={"100%"} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              {product.originalPrice && <p className="original-price">${product.originalPrice}</p>}
              {product.tag && <span className="product-tag">{product.tag}</span>}
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Collections;
