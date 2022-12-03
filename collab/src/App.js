import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./home";
import Navbar from "./navbar";
import Signup from "./signup";
import Login from "./login";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
