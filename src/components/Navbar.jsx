import React from "react";
import BrandImage from "../assets/BrandIcon.png";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light my-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={BrandImage} className="img-fliud h-100" alt="" />
          </a>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <Link activeClass="active" spy to="Home">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link activeClass="active" spy to="Services">
                  <a className="nav-link active" aria-current="page" href="#">
                    Services
                  </a>
                </Link>
              </li>
              {/* <li>
                <Link activeClass="active" spy to="Portfolio">
                  <a className="nav-link active" aria-current="page" href="#">
                    Portfolio
                  </a>
                </Link>
              </li> */}
              <li>
                <Link activeClass="active" spy to="Blogs">
                  <a className="nav-link active" aria-current="page" href="#">
                    Blogs
                  </a>
                </Link>
              </li>
              <li>
                <Link activeClass="active" spy to="AboutUs">
                  <a className="nav-link active" aria-current="page" href="#">
                    About
                  </a>
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <button class="btn btn-primary my-color" type="submit">
                Request Quote
              </button>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Sign in
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Register
                  </a>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
