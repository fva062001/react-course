import React, { useContext } from "react";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../context/cart-context";
function HeaderCartButton(props) {
  const ctx = useContext(CartContext);

  return (
    <button onClick={ctx.showCart} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{ctx.totalAmount}</span>
    </button>
  );
}

export default HeaderCartButton;
