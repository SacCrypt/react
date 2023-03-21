import React, { useState } from "react";

const Time = () => {
  const [value, setValue] = useState(0);

  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevState) => prevState + 1);
    }, 2000);
  };

  return (
    <div>
      <h1> {value}</h1>
      <button onClick={complexIncrease}> touch me</button>
    </div>
  );
};

export default Time;
