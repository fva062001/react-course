import React, { useContext } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContext from "./context/cart-context";

function App() {
  const ctx = useContext(CartContext);
  return (
    <>
      {ctx.cart && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
