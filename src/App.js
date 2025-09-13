import "./App.css";
import BannerSlide from "./Components/BannerSlide";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import Cards from "./Components/ProductCards";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <BannerSlide /> <Cards />
              </>
            }
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
