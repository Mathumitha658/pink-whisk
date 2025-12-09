import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "./assets/logoimg.png";
import { Link } from "react-router-dom";


function Header() {
  return (
    <nav
        className="navbar navbar-expand-lg shadow-sm"
        style={{ backgroundColor: "#ffb6c1" }}
      >
        <div className="container">
          <a className="navbar-brand fw-bold fs-3 text-white" href="">
                    <Link to="/" className="navbar-brand fw-bold fs-3 text-white d-flex align-items-center text-decoration-none">

            <img
              src={logo}
              alt="Pink Whisk Logo"
              width="70"
              height="70"
              className="me-2 rounded-circle"
            />
            Pink Whisk
            </Link>
          </a>

          <div className="btn fw-semibold">
            <a href="#">
              <Link
                to="/login"
                className="btn btn-light text-pink fw-bold me-2"
              >
                {" "}
                Login
              </Link>
            </a>
            <a href="#" className="btn fw-semibold">
              <Link className="btn btn-light text-pink fw-bold" to="/register">
                Register
              </Link>
            </a>
                  <Link to={"/cart"} className="btn btn-light text-pink fw-bold" >
        🛒
      </Link>

          </div>
        </div>
      </nav>

  );
}``

export default Header;
