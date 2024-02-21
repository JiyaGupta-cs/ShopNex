import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItems, setcartItems] = useState([]);
  const [theme,setTheme]=useState("dark");
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
      setcartItems(updatedCartItems);
    } else {
      const cartProduct = all_product.find((product) => product.id === itemId);
      cartProduct.size = size;
      cartProduct.quantity = quantity;
      setcartItems([...cartItems, cartProduct]);
    }
  };
  
  const removeFromCart = (itemId) => {
    setcartItems(cartItems.filter((product) => product.id !== itemId));
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
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    setTheme,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
