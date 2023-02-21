import React from "react";
import BrandLogo from "../assets/BrandLogo.png";
function Footer() {
  return (
    <div className="container mt-5 m-0 p-3 my-color my-fontcolor-3">
      <div className="row">
        <div className="col bg-light">
          <img src={BrandLogo} className="img-fluid w-100" alt="" />
        </div>
        <div className="col">
          <h4>About</h4>
          <a href="">About Company</a>
          <br />
          <a href="">Career</a>
          <br />
          <a href="">Portfolio</a>
          <br />
          <a href="">Get Quote</a>
          <br />
          <a href="">FAQs</a>
          <br />
          <a href="">Testimonial</a>
          <br />
          <a href="">Contact Us</a>
          <br />
        </div>
        <div className="col">
          <h4>Our Services</h4>
        </div>
        <div className="col">
          <h4>Contact Us</h4>
        </div>
      </div>
      <div className="container d-flex aligns-items-center justify-content-center  ">
        @ 2023 EDITS FROM INDIA. All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
