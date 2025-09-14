import { useRef, useEffect } from "react";
import observer from "./Animate";

export default function ProductCards(props) {
  const objectRef = useRef(null);
  const animationObserver = () => {
    if (objectRef.current) {
      observer.observe(objectRef.current);
    }
  };

  useEffect(() => {
    animationObserver();
  }, []);

  return (
    <>
      <div
        className="card-section-header scaleAnimation"
        id="shopping-cards"
        ref={objectRef}
      >
        <div className="card-section-heading">
          <h1 className="card-section-content">Stay Charged. Keep Moving.</h1>
        </div>
        <p>
          Power your machines with trusted batteries built for every journey. No
          delays, no dead starts — just smooth, reliable performance wherever
          you go.
        </p>
      </div>

      <section className="card-section">
        <div className="cards" id="product-container">
          {props.productsList.map((item) => (
            <div className={`card card${item.id}`} key={item.id}>
              <div className="card-section1">
                <img
                  className="card-section1-image"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div className="card-section2">
                <p className="card-section2-content1">{item.name}</p>
                <p className="card-section2-content3">PKR {item.price}</p>
                <div
                  data-id={item.id}
                  onClick={() => {
                    props.addProduct(item.id);
                  }}
                  className="card-section2-btn"
                >
                  Add to cart
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
