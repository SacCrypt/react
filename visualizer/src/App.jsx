import { useSelector, useDispatch } from "react-redux";
import { addNode, addEdge, deleteNode, deleteEdge } from "./redux";
import Main from "./components/main";

function App() {
  return <Main />;
}

export default App;
