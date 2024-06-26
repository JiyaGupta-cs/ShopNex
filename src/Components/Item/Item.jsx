import React, { useContext } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Item = (props) => {
  const { theme } = useContext(ShopContext);

  return (
    <div className="product-card">
      <Link to={`/product/${props.id}`} className="product-image-container ">
        <img
          onClick={() => window.scrollTo(0, 0)}
          src={props.image}
          alt={props.name}
          className="product-image"
        />
        {props.discount && (
          <span className="discount-badge">{props.discount}% OFF</span>
        )}
      </Link>
      <div className="product-details">
          <h5 className="product-title">{props.name}</h5>
        <div className="price-rating-container">
          <p className="price">
            <span className="current-price">${props.new_price}</span>
            <span className="original-price">${props.old_price}</span>
          </p>
          <div className="rating">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <svg
                  key={index}
                  aria-hidden="true"
                  className="star-icon"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            <span className="rating-value">5.0</span>
          </div>
        </div>
        <Link to={`/product/${props.id}`} className="add-to-cart-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="cart-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Add to cart
        </Link>
      </div>
    </div>
  );
};

export default Item;
