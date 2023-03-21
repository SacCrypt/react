import React, { useState } from "react";
import { data } from "./trash";

const Lor = () => {
  const [para, setPara] = useState([]);
  let [counter, setCounter] = useState(0);
  const handleClick = (e) => {
    if (e.target.textContent === "Increase") {
      counter += 1;
    } else {
      if (counter > 0) {
        counter -= 1;
      }
    }
    setCounter(counter);
    setPara(data.slice(0, counter));
  };

  return (
    <div>
      <h3>Tired Of Boring Lorem Ipsum</h3>
      <button onClick={(e) => handleClick(e)}>Increase</button>
      <button onClick={(e) => handleClick(e)}>Decrease</button>

      <h3>{counter}</h3>
      {para.map((temp, index) => (
        <p key={index}> {temp} </p>
      ))}
    </div>
  );
};

export default Lor;
