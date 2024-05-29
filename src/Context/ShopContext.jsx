import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [theme, setTheme] = useState("dark");
  const [activeMenu, setActiveMenu] = useState("shop");

  const addToCart = (itemId, size, quantity) => {
    const existingCartItemIndex = cartItems.findIndex(item => item.id === itemId && item.size === size);
  
    if (existingCartItemIndex !== -1) {
      const updatedCartItems = cartItems.map((item, index) => {
        if (index === existingCartItemIndex) {
          return {
            ...item,
            quantity: item.quantity + quantity
          };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    } else {
      const cartProduct = all_product.find((product) => product.id === itemId);
      cartProduct.size = size;
      cartProduct.quantity = quantity;
      setCartItems([...cartItems, cartProduct]);
    }
  };
  
  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((product) => product.id !== itemId));
  };

  const getTotalCartAmount = () => {
    return cartItems.reduce((total, product) => total + (product.new_price * product.quantity), 0);
  };
  
  const getTotalCartItems = () => {
    return cartItems.length;
  };

  const contextValue = {
    all_product,
    cartItems,
    theme,
    activeMenu,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    setTheme,
    setActiveMenu,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
