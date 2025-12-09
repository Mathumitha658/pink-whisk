import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";


function Footer() {
  return (
    <footer
      className="text-white pt-5 pb-3 mt-5"
      style={{ backgroundColor: "#ffb6c1" }}
    >
      <div className="container text-center text-md-start">
        <div className="row">
          {/* Brand Info */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold">🎀 Pink Whisk</h4>
            <p style={{ color: "#fffafc" }}>
              Sweeten your special moments with our delicious cakes and treats.
              Made with love 💕 and the finest ingredients!
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-semibold text-white">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/cakes" className="text-white text-decoration-none">Cakes</a></li>
              <li><a href="/cart" className="text-white text-decoration-none">Cart</a></li>
              <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-semibold text-white">Contact Us</h5>
            <p className="mb-1"><i className="bi bi-geo-alt-fill me-2"></i>123 Pink Street, Caketown, India 🍰</p>
            <p className="mb-1"><i className="bi bi-telephone-fill me-2"></i>+91 98765 43210</p>
            <p className="mb-3"><i className="bi bi-envelope-fill me-2"></i>pinkwhisk@cake.in</p>

            <div>
              <a href="#" className="text-white mx-2" style={{ fontSize: "1.3rem" }}>
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white mx-2" style={{ fontSize: "1.3rem" }}>
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-white mx-2" style={{ fontSize: "1.3rem" }}>
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        <hr style={{ borderColor: "#fff" }} />
        <p className="text-center mb-0" style={{ color: "#fffafc" }}>
          © {new Date().getFullYear()} Pink Whisk. All Rights Reserved 💗
        </p>
      </div>
    </footer>
  );
}``

export default Footer;
