import React from "react";

const Memo = () => {
  return (
    <div>
      re-renders when props are change React.Memo()
      <div>
        useCallback re renders only on dependency array of the function value
      </div>
    </div>
  );
};

export default Memo;
