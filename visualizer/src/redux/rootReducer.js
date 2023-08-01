import networkReducer from "./network/networkReducer";
import undoable from "redux-undo";

const rootReducer = undoable(networkReducer, {
  limit: 10,
});

export default rootReducer;
