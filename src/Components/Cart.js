import React from "react";
import ProductList from "./ProductList";
import CartSummary from "./CartSummary";
import Navbar from "./Navbar";

export default function Cart() {
  return (
    <>
      <Navbar className="nav-container" />

      <div className="banner">
        <h1 className="banner-content scaleAnimation">CART SUMMARY</h1>
      </div>

      <div className="cart-summary">
        <p className="items-count-text"></p>
        <div className="carts-section">
          <ProductList />
          <CartSummary />
        </div>
      </div>
    </>
  );
}
