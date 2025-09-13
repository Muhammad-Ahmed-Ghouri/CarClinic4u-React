import React from "react";

export default function CartSummary() {
  return (
    <>
      <div className="carts-section2">
        <div className="price-summary">
          <h4 className="price-summary-heading">Price Summary</h4>
          <div className="price-summary-content1">
            <p className="content1-text1">Total Items:</p>
            <p className="content1-text2"></p>
          </div>
          <div className="price-summary-content2">
            <p className="content2-text1">Items Subtotal:</p>
            <p className="content2-text2"></p>
          </div>
          <div className="price-summary-content4">
            <p className="content4-text1">
              <strong>Customer Total:</strong>
            </p>
            <p className="content4-text2"></p>
          </div>
          <div className="check-out-btn">
            <a
              href="./proceedToCheckout.html"
              className="check-out-btn-text disabled-link"
              id="checkout"
            >
              PROCEED TO CHECKOUT
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
