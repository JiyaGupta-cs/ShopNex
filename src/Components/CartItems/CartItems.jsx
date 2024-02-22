import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import placeholder_image from "../Assets/empty-cart.png"; // Keep placeholder_image import

const CartItems = () => {
  const { cartItems, removeFromCart, getTotalCartAmount, theme } =
    useContext(ShopContext);

  const calculateTotalPrice = (item) => {
    return item.new_price * item.quantity;
  };

  const isEmptyCart = cartItems.length === 0;

  return (
    <div className="cartitems">
      <div className={`cartitems-format-main ci_${theme}`}>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Size</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      {isEmptyCart && (
        <div className="empty-cart">
          <img
            src={placeholder_image}
            alt="Empty Cart"
            style={{ width: "150px", marginLeft: "490px" }}
          />
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "24px", color: "#333" }}>
              Hey, it feels so light!
            </p>
            <p style={{ fontSize: "18px", color: "#999" }}>
              There is nothing in your bag. Let's add some items.
            </p>
          </div>
        </div>
      )}
      <hr />
      {cartItems.map((item) => {
        return (
          <div key={item.id}>
            <div
              className={`cartitems-format cartitems-format-main ci_${theme}`}
            >
              <img
                src={item.image}
                alt=""
                className="carticon-product-icon"
                style={{ width: "50px", margin: "auto" }}
              />
              <p>{item.name}</p>
              <p className="text-Align">${item.new_price}</p>
              <p className="text-Align">{item.size}</p>
              <p className="cartitems-quantity">{item.quantity}</p>
              <p className="text-Align">${calculateTotalPrice(item)}</p>{" "}
              {/* Display total price for each item */}
              <img
                className="cartitems-remove-icon"
                src={remove_icon}
                onClick={() => {
                  removeFromCart(item.id);
                }}
                alt=""
              />
            </div>
            <hr />
          </div>
        );
      })}
      <div className="cartitems-down">
        <div className={`cartitems-total ci_${theme}`}>
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Promo Code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
