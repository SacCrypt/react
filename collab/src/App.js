import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Signup from "./components/signup";
import Login from "./components/login";
import Buy from "./components/buy";
import productList from "./components/productList";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Buy" element={<Buy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
