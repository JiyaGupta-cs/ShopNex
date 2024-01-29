import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import start_icon from "../Assets/star_icon.png";
import start_dull_icon from "../Assets/star_dull_icon.png";
import { useLinkClickHandler } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  const [selectedSize, setSelectedSize] = useState("S"); // State for selected size
  const [selectedQuantity, setSelectedQuantity] = useState(1); // State for selected quantity

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (quantity) => {
    setSelectedQuantity(quantity);
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-image">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
          aspernatur assumenda cum eligendi tenetur, enim, expedita beatae,
          quasi et esse ipsam. Unde error quae animi distinctio numquam, a
          quidem dicta!
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div
              className={`size-option ${
                selectedSize === "S" ? "selected" : ""
              }`}
              onClick={() => handleSizeChange("S")}
            >
              S
            </div>
            <div
              className={`size-option ${
                selectedSize === "M" ? "selected" : ""
              }`}
              onClick={() => handleSizeChange("M")}
            >
              M
            </div>
            <div
              className={`size-option ${
                selectedSize === "L" ? "selected" : ""
              }`}
              onClick={() => handleSizeChange("L")}
            >
              L
            </div>
            <div
              className={`size-option ${
                selectedSize === "XL" ? "selected" : ""
              }`}
              onClick={() => handleSizeChange("XL")}
            >
              XL
            </div>
            <div
              className={`size-option ${
                selectedSize === "XXL" ? "selected" : ""
              }`}
              onClick={() => handleSizeChange("XXL")}
            >
              XXL
            </div>
          </div>
        </div>
        <div className="productdisplay-right-quantity">
          <h1>Select Quantity</h1>
          <input
            type="number"
            min="1"
            value={selectedQuantity}
            onChange={(e) => handleQuantityChange(e.target.value)}
          />
        </div>
        <button
          onClick={() => {
            addToCart(product.id, selectedSize, selectedQuantity);
          }}
        >
          ADD TO CART
        </button>
        <p className="productdisplay-right-category">
          <span>Category : </span>Women, T-shirt, Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags : </span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
