import React, { useState } from "react";

const Short = () => {
  const [text, setText] = useState("blah");
  const [Error, setError] = useState(false);
  return (
    <>
      {Error ? <h1> Bernarnd</h1> : <h1>Error !</h1>}
      <button onClick={() => setError(!Error)}> Toggle Error</button>
      <h1></h1>
    </>
  );
};

export default Short;

/* {text && <h1> hello </h1>}
   {!text && <h1> hello </h1>} */
