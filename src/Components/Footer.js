import React, { useEffect, useRef } from "react";
import observer from "./Animate";
import logo from "../assets/white-logo.png";
import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";
import rightArrow from "../assets/right-arrow-forward.png";

export default function Footer() {
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
      <div className="container footer-container">
        <footer id="footer-section">
          <div className="footer-section-box1">
            <div className="footer-section-box1-content1">
              <div className="logo">
                <a href="/">
                  <img
                    className="animated-logo"
                    ref={objectRef}
                    src={logo}
                    alt=""
                  />
                </a>
                <a href="/">
                  <p className="logo-content">Carclinic4u</p>
                </a>
              </div>
              <p className="footer-section-box1-content1-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem optio aliquam dolore reiciendis accusamus. Architecto
                placeat exercitationem tempore harum reiciendis quod ab,
                distinctio esse beatae voluptatem! Nihil ex dolore officia?
              </p>
            </div>
            <div className="footer-section-box1-content2">
              <a className="first-image-anchor-tag" href="/" target="_blank">
                <img
                  className="footer-section-box1-content2-facebook-icon"
                  src={facebookIcon}
                  alt=""
                />
              </a>
              <a className="second-image-anchor-tag" href="/" target="_blank">
                <img
                  className="footer-section-box1-content2-instagram-icon"
                  src={instagramIcon}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="footer-section-box2">
            <h1>Quick Links</h1>
            <ul>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Our Services</a>
              </li>
              <li>
                <a href="/">Contacts Us</a>
              </li>
            </ul>
          </div>
          <div className="footer-section-box3">
            <div className="footer-section-box3-content1">
              <h1>Contact Us</h1>
            </div>

            <div className="footer-section-box3-content2">
              <div className="footer-section-box-content-heading">
                <span>
                  <img src="./assets/smartphone-call.png" alt="" />
                </span>
                <span>
                  <h5>Support</h5>
                </span>
              </div>
              <div className="footer-section-box-content-text">
                <p>
                  <a href="/">xxxxxxxxxx</a>
                </p>
                <p>
                  <a href="/">xxxxxxxxxx</a>
                </p>
              </div>
            </div>

            <div className="footer-section-box3-content3">
              <div className="footer-section-box-content-heading">
                <span>
                  <h5>@ &nbsp;</h5>
                </span>
                <span>
                  <h5>Email Us</h5>
                </span>
              </div>
              <div>
                <p className="footer-section-box-content-text">
                  <a href="/">abc@gmail.com</a>
                </p>
              </div>
            </div>

            <div className="footer-section-box3-content4">
              <div className="footer-section-box-content-heading">
                <span>
                  <img src="./assets/maps-and-flags.png" alt="" />
                </span>
                <span>
                  <h5>Head Office</h5>
                </span>
              </div>
              <div className="footer-section-box-content-text">
                <a href="/" target="_blank">
                  <p>ABC road Karachi</p>
                </a>
              </div>
            </div>
            <div className="footer-section-box3-content5">
              <a href="/" target="_blank">
                <img src={rightArrow} alt="" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
