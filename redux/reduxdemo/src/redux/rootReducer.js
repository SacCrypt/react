import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamreducer";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

export default rootReducer;
