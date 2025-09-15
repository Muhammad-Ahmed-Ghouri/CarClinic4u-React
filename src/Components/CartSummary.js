import { useState, useEffect } from "react";

export default function CartSummary({ selectedProducts }) {
  const [payLoad, setPayLoad] = useState({
    totalItems: 0,
    itemsSubtotal: 0,
    totalAmount: 0,
    items: [],
  });

  useEffect(() => {
    let totalItems = 0;
    let itemsSubtotal = 0;
    let totalAmount = 0;

    selectedProducts.forEach((product) => {
      totalItems += product.quantity;
      itemsSubtotal += product.subtotal;
      totalAmount += product.subtotal;
    });

    setPayLoad({
      totalItems,
      itemsSubtotal,
      totalAmount,
      items: selectedProducts,
    });

    // LocalStorage me bhi save kar do
    localStorage.setItem(
      "orderSummary",
      JSON.stringify({
        payLoad,
      })
    );
  }, [selectedProducts]);

  return (
    <>
      <div className="carts-section2">
        <div className="price-summary">
          <h4 className="price-summary-heading">Price Summary</h4>
          <div className="price-summary-content1">
            <p className="content1-text1">Total Items:</p>
            <p className="content1-text2">{payLoad.totalItems}</p>
          </div>
          <div className="price-summary-content2">
            <p className="content2-text1">Items Subtotal:</p>
            <p className="content2-text2">PKR {payLoad.itemsSubtotal}</p>
          </div>
          <div className="price-summary-content4">
            <p className="content4-text1">
              <strong>Customer Total:</strong>
            </p>
            <p className="content4-text2">PKR {payLoad.totalAmount}</p>
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
