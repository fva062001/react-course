import React, { useState } from "react";
import CartContext from "./cart-context";

function CartProvider(props) {
  const [cart, setCart] = useState(false);
  const showCart = () => {
    setCart(true);
  };
  const unshowCart = () => {
    setCart(false);
  };
  const addItem = (item) => {
    console.log("Add Item");
  };

  const removeItem = (id) => {
    console.log("Rmove Item");
  };

  const cartContext = {
    items: [],
    totalAmount: 0,
    cart: cart,
    addItem: addItem,
    removeItem: removeItem,
    showCart: showCart,
    unshowCart: unshowCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
