import ProductList from "./ProductList";
import CartSummary from "./CartSummary";

export default function Cart(props) {
  return (
    <>
      <div className="banner">
        <h1 className="banner-content scaleAnimation">CART SUMMARY</h1>
      </div>

      <div className="cart-summary">
        <p className="items-count-text"></p>
        <div className="carts-section">
          <ProductList
            deleteProduct={props.deleteProduct}
            selectedProducts={props.selectedProducts}
          />
          <CartSummary selectedProducts={props.selectedProducts} />
        </div>
      </div>
    </>
  );
}
