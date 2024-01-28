import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItems, setcartItems] = useState([]);

  const addToCart = (itemId, size, quantity) => {
    const cartProduct = all_product.find((product) => product.id === itemId);
    cartProduct.size = size;
    cartProduct.Quantity = quantity;
    console.log(cartProduct);
    setcartItems([...cartItems, cartProduct]);
  };
  const removeFromCart = (itemId) => {
    setcartItems(cartItems.filter((product) => product.id !== itemId));
  };

  const getTotalCartAmount = () => {
    const total = 0;
    return cartItems.map((product) => total + product.new_price)[0] || 0;
  };

  const getTotalCartItems = () => {
    return cartItems.length;
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
