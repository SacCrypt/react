import React, { useEffect, useRef } from "react";

const Unctrl = () => {
  const refContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };
  useEffect(() => {
    refContainer.current.focus();
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Unctrl;
