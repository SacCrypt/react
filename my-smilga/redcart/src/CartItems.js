import React, { useEffect, useState } from "react";
import { data } from "./data";

let sum = 0;

const CartItems = () => {
  const [total, setTotal] = useState(sum);
  const [items, setItems] = useState(data);
  useEffect(() => {
    data.map((ob) => {
      sum += parseFloat(ob.price.slice(1, ob.price.length));
      return Math.floor(sum).toFixed(2);
    });

    setTotal(sum);
  }, []);
  const handleQuantity = (e, id) => {
    setItems((currentItems) =>
      currentItems.map((currentItem) =>
        currentItem.id === id
          ? {
              ...currentItem,
              quantity:
                e.target.textContent === "Increase"
                  ? (currentItem.quantity += 1)
                  : (currentItem.quantity -= 1),
            }
          : currentItem
      )
    );
  };
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      {items.map((item) => {
        const { id, name, price, quantity } = item;
        return (
          <div key={id}>
            <h4> {name} </h4>
            <b> {price} </b>
            <button onClick={() => removeItem(id)}> Remove </button>
            <button onClick={(e) => handleQuantity(e, id)}>Increase</button>
            <button onClick={(e) => handleQuantity(e, id)}>Decrease</button>
            <h3>{quantity}</h3>
          </div>
        );
      })}
      <h3>Total: {total}</h3>
    </div>
  );
};

export default CartItems;
