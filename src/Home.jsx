import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import cakeImages from "./assets/cake.jpg";
import "./App.css";
import { Link } from "react-router-dom";
import Cakes from "./Cakes";
import Footer from "./Footer";
import Header from "./Header";
import About from "./About";
import CupCakes from "./cupcakes";

function HomePage() {
  return (
    <>
      <Header />
      
      <div
        style={{
          background: "linear-gradient(to bottom right, #ffe6f0, #fff)",
          minHeight: "100vh",
        }}
      >
        <div className="text-center mt-4">
          <ul className="list-inline fs-5 fw-semibold">

            {/* About */}
            <li className="list-inline-item mx-3">
              <Link
                className="text-decoration-none nav-link fw-bold"
                style={{ color: "#d63384" }}
                to="/about"
              >
                About
              </Link>
            </li>

            {/* Cakes */}
            <li className="list-inline-item mx-3">
              <Link
                className="text-decoration-none nav-link fw-bold"
                style={{ color: "#d63384" }}
                to="/cakes"
              >
                Cakes
              </Link>
            </li>

            {/* Cupcakes */}
            <li className="list-inline-item mx-3">
              <Link
                className="text-decoration-none nav-link fw-bold"
                style={{ color: "#d63384" }}
                to="/upcakes"
              >
                Cupcakes
              </Link>
            </li>

            {/* Flowers and Candles */}
            <li className="list-inline-item mx-3">
              <Link
                className="text-decoration-none nav-link fw-bold"
                style={{ color: "#d63384" }}
                to="/flowers-and-candle"
              >
                Flowers & Candles
              </Link>
            </li>

          </ul>
        </div>

        {/* CAKE IMAGE - CLICKABLE */}
        <div className="text-center mt-4">
          <Link to="/cakes">
            <img
              src={cakeImages}
              alt="Delicious Cake"
              className="img-fluid rounded shadow-lg border border-light"
              style={{
                maxHeight: "400px",
                width: "90%",
                cursor: "pointer",
              }}
            />
          </Link>

          <h2 className="mt-4" style={{ color: "#d63384" }}>
            Freshly Baked With Love 💕
          </h2>
          <p className="text-muted">Every slice is a moment of joy!</p>
        </div>
      </div>

      <Cakes />
      <CupCakes/>
      <About/>
      <Footer />
    </>
  );
}

export default HomePage;
