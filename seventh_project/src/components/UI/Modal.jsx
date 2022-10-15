import React, { useContext } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import CartContext from "../../context/cart-context";

function Backdrop(props) {
  const ctx = useContext(CartContext);
  return <div onClick={ctx.unshowCart} className={classes.backdrop}></div>;
}

function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

export default function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onOverlayClick} />,
        document.getElementById("overlays")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlays")
      )}
    </>
  );
}
