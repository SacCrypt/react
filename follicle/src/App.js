import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Signup from "./components/signup";
import Login from "./components/login";
import Buy from "./components/buy";
import Book from "./components/book";
import AddProd from "./components/addProducts";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/Book" element={<Book />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Buy" element={<Buy />} />
        <Route path="/addProducts" element={<AddProd />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
