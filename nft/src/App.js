import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
function App() {
  return (
    <div style={{ background: "#181818" }}>
      <BrowserRouter>
        <Navbar />
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
