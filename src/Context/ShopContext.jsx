import React, { createContext, useReducer, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const initialState = {
  cartItems: [],
  error: "",
  total: 0,
  theme: "dark",
  length: 0,
};
function reducer(state, action) {
  const newTotal = state.cartItems.reduce(
    (acc, product) => acc + product.new_price,
    0
  );
  switch (action.type) {
    case "cart/added":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        total: newTotal,
        length: state.cartItems.length,
      };
    case "cart/remove":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (product) => product.id !== action.payload
        ),

        total: newTotal,
        length: state.cartItems.length,
      };

    case "cart/theme":
      return {
        ...state,
        theme: action.payload,
      };

    default:
      return state;
  }
}

const ShopContextProvider = (props) => {
  const [{ cartItems, total, theme, length }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const addToCart = (itemId, size, quantity) => {
    const cartProduct = all_product.find((product) => product.id === itemId);
    cartProduct.size = size;
    cartProduct.Quantity = quantity;
    console.log(cartProduct);
    dispatch({ type: "cart/added", payload: cartProduct });
  };
  const removeFromCart = (itemId) => {
    dispatch({ type: "cart/remove", payload: itemId });
  };

  const getTotalCartAmount = () => {
    return total;
  };

  const getTotalCartItems = () => {
    return length;
  };
  const setTheme = (theme) => {
    dispatch({ type: "cart/theme", payload: theme });
    return length;
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
