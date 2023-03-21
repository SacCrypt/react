import React, { useState, useEffect } from "react";

const Eff = () => {
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setSize(window.innerWidth);
    });
  }, []);
  return (
    <>
      <h1> {size} </h1>
    </>
  );
};

export default Eff;
