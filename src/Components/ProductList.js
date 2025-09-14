import React from "react";
import { HashLink } from "react-router-hash-link";

export default function ProductList() {
  return (
    <>
      <div className="carts-section1">
        <div className="cart-content-1 cartid">
          <div className="cart">
            <div className="cart-image">
              <img src="${item.image}" alt="" className="product-image" />
            </div>

            <div className="cart-content">
              <div className="cart-content1">
                <div className="cart-content1-text">
                  <p className="name-text">item name</p>
                  <p className="price-text">PKR item price</p>
                  {/* <p className="name-text">${item.name}</p>
                  <p className="price-text">PKR ${item.price}</p> */}
                </div>
                <button data-id="${item.id}" className="cart-content1-button">
                  <img
                    src="./assets/trash-bin.png"
                    alt=""
                    className="button-icon"
                  />
                  <p className="button-text">DELETE</p>
                </button>
              </div>

              <div className="cart-content2">
                <div className="cart-content2-quantity">
                  <p className="quantity-text">Quantity:</p>
                  <div className="quantity-calculator">
                    <img
                      data-id="${item.id}"
                      src="./assets/minus-sign.png"
                      alt=""
                      className="quantity-subtract"
                    />
                    <input
                      name="quantity"
                      data-id="${item.id}"
                      value="${item.quantity}"
                      className="quantity-calculator-field"
                      type="number"
                    />
                    <img
                      data-id="${item.id}"
                      src="./assets/plus-sign.png"
                      alt=""
                      className="quantity-addition"
                    />
                  </div>
                </div>

                <div className="cart-content2-subtotal">
                  <p className="subtotal-text">
                    item subtotal:{" "}
                    {/* <strong className="subtotal-price-text">
                      PKR ${item.price * item.quantity}
                    </strong> */}
                    <strong className="subtotal-price-text">PKR</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="addCarts">
          <HashLink className="addCarts-text" smooth to="/#shopping-cards">
            Add Product
          </HashLink>
        </div>
        <div className="no-cards">
          <h3 className="no-cards-heading">No items in your cart.</h3>
          <p className="no-cards-text">Click "Add Product" to start.</p>
        </div>
      </div>
    </>
  );
}
