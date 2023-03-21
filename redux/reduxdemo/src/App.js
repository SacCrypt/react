import RootContainer from "./components/RootContainer";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RootContainer />
      </div>
    </Provider>
  );
}

export default App;
