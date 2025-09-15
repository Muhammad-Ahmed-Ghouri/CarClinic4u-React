import { useEffect, useState } from "react";
import "./App.css";
import BannerSlide from "./Components/BannerSlide";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import ProductCards from "./Components/ProductCards";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import card1 from "../src/battery1.jpg";
import card2 from "../src/battery2.webp";
import card3 from "../src/battery3.jpeg";

function App() {
  const productsList = [
    {
      id: 1,
      name: "VoltEdge ProCell 3000",
      price: 320,
      image: card1,
    },
    {
      id: 2,
      name: "LithioMax Power+",
      price: 320,
      image: card2,
    },
    {
      id: 3,
      name: "Energix UltraCharge",
      price: 80,
      image: card3,
    },
    {
      id: 4,
      name: "PowerNest TurboCore",
      price: 100,
      image: card1,
    },
    {
      id: 5,
      name: "ZenVolt SmartCell",
      price: 120,
      image: card2,
    },
    {
      id: 6,
      name: "Osaka",
      price: 755,
      image: card3,
    },
    {
      id: 7,
      name: "Volta",
      price: 870,
      image: card1,
    },
    {
      id: 8,
      name: "Daewoo",
      price: 990,
      image: card2,
    },
    {
      id: 9,
      name: "SF Sonic",
      price: 650,
      image: card3,
    },
    {
      id: 10,
      name: "AGS (Atlas Group)",
      price: 240,
      image: card1,
    },
  ];

  const [selectedProducts, setSelectedProducts] = useState(() => {
    const savedProducts = JSON.parse(localStorage.getItem("cart"));
    return savedProducts || [];
  });

  function addItems(productId) {
    const product = productsList.find((product) => product.id === productId);
    const existingItem = selectedProducts.find((item) => item.id === productId);

    setSelectedProducts((prev) => {
      const existingItem = prev.find((item) => item.id === productId);
      if (existingItem) {
        return prev.map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity + 1,
                subtotal: item.price * (item.quantity + 1),
              }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1, subtotal: product.price }];
      }
    });

    // localStorage.setItem("cart", JSON.stringify(selectedProducts));
    // counting items which have selected
    // itemCount(selectedProducts.length);
  }

  function addProduct(productId) {
    const product = productsList.find((item) => item.id === productId);

    // Check if product is already added
    const existingProduct = selectedProducts.find(
      (item) => item.id === product.id
    );

    addItems(productId);

    // message.style.opacity = "1";
    // if (existingProduct) {
    //   messageContent.innerHTML = `You have added this product ${existingProduct.quantity} times successfully!`;
    // } else {
    //   messageContent.innerHTML = `You have added ${selectedProducts.length} product successfully!`;
    // }

    // setTimeout(() => {
    //   message.style.opacity = "0";
    // }, 3000);
  }

  const removeProduct = (id) => {
    const updatedProducts = selectedProducts.filter(
      (product) => product.id !== id
    );
    setSelectedProducts(updatedProducts); // this re-renders ProductList
    localStorage.setItem("cart", JSON.stringify(updatedProducts));

    //   itemsCountTextUpdate(selectedProducts.length);

    // itemCount(selectedProducts.length);

    // localStorage.setItem("cart", JSON.stringify(selectedProducts));
    // cartSummary(selectedProducts);

    // localStorage.setItem("orderSummary", JSON.stringify(payLoad));
  };

  const deleteProduct = (productId) => {
    removeProduct(productId);

    // if (selectedProducts.length === 0) {
    //   emptyCart.style.display = "flex";
    // }

    // if (selectedProducts.length != 0) {
    //   checkoutButton.style.pointerEvents = "auto";
    //   checkoutButton.style.cursor = "pointer";
    //   checkoutButton.style.backgroundColor = "#2e72cc";
    // } else {
    //   checkoutButton.style.pointerEvents = "none";
    //   checkoutButton.style.cursor = "none";
    //   checkoutButton.style.backgroundColor = "#cbcbcb";
    // }
  };

  useEffect(() => {
    console.log(selectedProducts);
    localStorage.setItem("cart", JSON.stringify(selectedProducts));
  }, [selectedProducts]);
  return (
    <>
      <BrowserRouter>
        <Navbar count={selectedProducts.length} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <BannerSlide />{" "}
                <ProductCards
                  productsList={productsList}
                  addProduct={addProduct}
                />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                selectedProducts={selectedProducts}
                deleteProduct={deleteProduct}
              />
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
