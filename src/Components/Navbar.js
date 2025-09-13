import React, { useEffect, useState, useRef } from "react";
import observer from "./Animate";
import logo from "../assets/logo.png";
import hamburger from "../assets/hamburger.png";
import cart from "../assets/cart-icon.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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
      <nav id="navbar">
        <div className="logo">
          <div
            className="hamburger-container"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img id="hamburger-icon" src={hamburger} alt="" />
          </div>
          <Link Link="/">
            <p className="logo-content">Carclinic4u</p>
          </Link>
          <Link className="logo-icon" to="/">
            <img
              className="animated-logo"
              ref={objectRef}
              src={logo}
              alt="logo"
            />
          </Link>
        </div>
        <ul>
          <div className="nav-item">
            <li>
              <Link className="nav-li" to="/">
                HOME
              </Link>
            </li>
            <div className="bottom-line"></div>
          </div>
          <div className="nav-item">
            <li>
              <Link className="nav-li" to="/">
                ABOUT US
              </Link>
            </li>
            <div className="bottom-line"></div>
          </div>
          <div className="nav-item">
            <li>
              <Link className="nav-li" to="/">
                SERVICES
              </Link>
            </li>
            <div className="bottom-line"></div>
          </div>
          <div className="nav-item">
            <li>
              <Link className="nav-li" to="/">
                CONTACT US
              </Link>
            </li>
            <div className="bottom-line"></div>
          </div>
        </ul>
        <div>
          <Link to="/cart" className="cart-icon-container-small-screen">
            <span className="item-count">2</span>
            <img className="cart-icon" src={cart} alt="" />
          </Link>
        </div>
      </nav>

      <div className="hamburger-nav-container">
        <nav id="hamburger-navbar" className={isOpen ? "active" : ""}>
          <ul>
            <li className="hamburger-nav-item">
              <Link className="hamburger-nav-li" to="/">
                HOME
              </Link>
            </li>
            <li className="hamburger-nav-item">
              <Link className="hamburger-nav-li" to="/">
                ABOUT US
              </Link>
            </li>
            <li className="hamburger-nav-item">
              <Link className="hamburger-nav-li" to="/">
                SERVICES
              </Link>
            </li>
            <li className="hamburger-nav-item">
              <Link className="hamburger-nav-li" to="/">
                CONTACT US
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <Link to="./cart.html" className="cart-icon-container">
        <span className="item-count"></span>
        <img className="cart-icon" src={cart} alt="" />
      </Link>
    </>
  );
}
