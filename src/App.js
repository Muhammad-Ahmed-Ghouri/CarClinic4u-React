import "./App.css";
import BannerSlide from "./Components/BannerSlide";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import Cards from "./Components/ProductCards";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <BannerSlide />

        <Routes>
          <Route path="/" element={<Cards />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
