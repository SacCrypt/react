import React, { useEffect, useState } from "react";

const Show = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>show/hide</button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  return (
    <div>
      <h1> Window </h1>
      <h2> Size: {size}</h2>
    </div>
  );
};
export default Show;
