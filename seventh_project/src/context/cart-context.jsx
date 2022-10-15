import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  cart: false,
  addItem: (item) => {},
  removeItem: (id) => {},
  showCart: () => {},
  unshowCart: () => {},
});

export default CartContext;
