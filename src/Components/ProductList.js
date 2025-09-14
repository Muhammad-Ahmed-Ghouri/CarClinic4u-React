import { HashLink } from "react-router-hash-link";
import trashBin from "../assets/trash-bin.png";
import minusSign from "../assets/minus-sign.png";
import plusSign from "../assets/plus-sign.png";

export default function ProductList(props) {
  return (
    <>
      <div className="carts-section1">
        <div className="cart-content-1 cartid">
          {props.selectedProducts.map((product) => {
            return (
              <div className="cart">
                <div className="cart-image">
                  <img src={product.image} alt="" className="product-image" />
                </div>

                <div className="cart-content">
                  <div className="cart-content1">
                    <div className="cart-content1-text">
                      <p className="name-text">${product.name}</p>
                      <p className="price-text">PKR ${product.price}</p>
                    </div>
                    <button
                      data-id={product.id}
                      className="cart-content1-button"
                    >
                      <img src={trashBin} alt="" className="button-icon" />
                      <p className="button-text">DELETE</p>
                    </button>
                  </div>

                  <div className="cart-content2">
                    <div className="cart-content2-quantity">
                      <p className="quantity-text">Quantity:</p>
                      <div className="quantity-calculator">
                        <img
                          data-id={product.id}
                          src={minusSign}
                          alt=""
                          className="quantity-subtract"
                        />
                        <input
                          name="quantity"
                          data-id={product.id}
                          value={product.quantity}
                          className="quantity-calculator-field"
                          type="number"
                        />
                        <img
                          data-id={product.id}
                          src={plusSign}
                          alt=""
                          className="quantity-addition"
                        />
                      </div>
                    </div>

                    <div className="cart-content2-subtotal">
                      <p className="subtotal-text">
                        item subtotal:{" "}
                        <strong className="subtotal-price-text">
                          {product.price * product.quantity}
                        </strong>
                        <strong className="subtotal-price-text">
                          &nbsp;PKR
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
