import React, { useRef, useEffect } from "react";
import observer from "./Animate";
import card1 from "../assets/battery1.jpg";
import card2 from "../assets/battery2.webp";
import card3 from "../assets/battery3.jpeg";

export default function ProductCards(props) {
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
          {productsList.map((item) => (
            <div className={`card card${item.id}`} key={item.id}>
              <div className="card-section1">
                <img
                  className="card-section1-image"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div className="card-section2">
                <p className="card-section2-content1">${item.name}</p>
                <p className="card-section2-content3">PKR ${item.price}</p>
                <div
                  data-id={item.id}
                  onClick={props.updateCount}
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
