import React, { useState } from "react";
import { data } from "./huge";
const Menu = () => {
  const { Breakfast, Lunch, Shakes } = data;
  const [state, setState] = useState([]);
  console.log(state);
  console.log(Breakfast);
  return (
    <div>
      <h1> Our Menu </h1>
      <button onClick={() => setState([...Breakfast, ...Lunch, ...Shakes])}>
        {" "}
        All{" "}
      </button>{" "}
      <button onClick={() => setState(Breakfast)}> Breakfast </button>{" "}
      <button onClick={() => setState(Lunch)}> Lunch </button>{" "}
      <button onClick={() => setState(Shakes)}> Shakes </button>
      <div>
        {state.map((temp) => {
          const { id, title, price, img, desc } = temp;
          return (
            <div key={id}>
              <h3> {title} </h3>
              <b> {price} </b>
              <img src={img} />
              <p>{desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
