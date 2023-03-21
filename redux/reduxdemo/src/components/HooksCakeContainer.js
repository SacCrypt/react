import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { buyCake, buyIceCream } from "../redux";

const HooksCakeContainer = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2> Num of Cake - {numOfCakes}</h2>
      <h2> Num of IceCreams - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(buyCake())}> Buy Cake </button>
      <button onClick={() => dispatch(buyIceCream())}> Buy IceCream </button>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={(e) => dispatch(buyCake(number))}>
        Buy {number} Cakes
      </button>
    </div>
  );
};

export default HooksCakeContainer;
