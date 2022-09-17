import React, { useState } from "react";
import { data } from "./data";
var iterator = 0;
const Comp = () => {
  const [slide, setSlide] = useState(data[iterator]);
  const randomize = () => {
    const temp = iterator;
    while (temp === iterator) {
      console.log(temp, iterator);
      iterator = Math.floor(Math.random() * (data.length - 1 + 1));
    }

    setSlide(data[iterator]);
  };
  const handleRightClick = () => {
    iterator += 1;
    if (iterator > data.length - 1) {
      iterator = 0;
    }
    setSlide(data[iterator]);
  };
  const handleLeftClick = () => {
    iterator -= 1;
    if (iterator < 0) {
      iterator = data.length - 1;
    }
    setSlide(data[iterator]);
  };

  const { id, name, role, desc, img } = slide;
  return (
    <div key={id}>
      <img src={img} alt="Not applicable" />
      <h1> {name} </h1>
      <h4>{role}</h4>
      <p>{desc}</p>
      <button onClick={handleLeftClick}> Left Button</button>{" "}
      <button onClick={handleRightClick}> Right Button</button>
      <button onClick={randomize}> Surprise Me!</button>
    </div>
  );
};

export default Comp;
