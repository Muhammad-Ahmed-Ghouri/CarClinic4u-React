import { useState } from "react";
import "./App.css";
import BannerSlide from "./Components/BannerSlide";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import ProductCards from "./Components/ProductCards";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  const [count, setCount] = useState({
    count: 0,
    visibility: "hidden",
  });

  function updateCount() {
    setCount((prev) => ({
      count: prev.count + 1,
      visibility: "visible",
    }));
  }
  return (
    <>
      <BrowserRouter>
        <Navbar count={count.count} visibility={count.visibility} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <BannerSlide /> <ProductCards updateCount={updateCount} />
              </>
            }
          />
          <Route
            path="/cart"
            element={<Cart count={count.count} visibility={count.visibility} />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
