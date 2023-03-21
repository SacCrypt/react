import React, { useState } from "react";
import CartItems from "./CartItems";

const Cart = () => {
  const [no_items, setNumber] = useState();
  return (
    <div>
      <h2> Your Bag </h2>
      <span>{no_items}</span>
      <CartItems />
    </div>
  );
};

export default Cart;
