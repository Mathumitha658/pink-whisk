import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "./Header";
// import Footer from "./footer";


function About() {
  return (
    <>
    {/* <Header/> */}
    <div className="about-page py-5" style={{ backgroundColor: "#fff5f8" }}>
      <div className="container">
        <h1 className="text-center fw-bold mb-4" style={{ color: "#d63384" }}>
          About <span style={{ color: "#ff69b4" }}>Pink Whisk</span> 🍰
        </h1>

        <p className="lead text-center mb-5" style={{ color: "#555" }}>
          At <strong>Pink Whisk</strong>, we believe that every celebration deserves a touch of sweetness.  
          Our journey began with a simple whisk and a big dream — to craft cakes that not only look
          stunning but also taste heavenly. From birthdays to weddings, we’ve been adding smiles,
          one slice at a time.
        </p>

        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src="/images/pinkcake.jpg"
              alt="Pink Whisk Bakery"
              className="img-fluid rounded-4 shadow-sm"
            />
          </div>

          <div className="col-md-6 mt-4 mt-md-0">
            <h3 className="fw-bold mb-3" style={{ color: "#d63384" }}>
              Why Choose Pink Whisk?
            </h3>
            <ul className="fs-5" style={{ color: "#444", lineHeight: "1.8" }}>
              <li>🍰 Freshly baked cakes made daily with love and care.</li>
              <li>🎂 Customized designs for every occasion and theme.</li>
              <li>🧁 Wide range of flavors — from classic vanilla to exotic red velvet.</li>
              <li>🎀 100% quality ingredients with no compromise on taste.</li>
              <li>🚚 Fast and safe delivery right to your doorstep.</li>
            </ul>
          </div>
        </div>

        <div className="mt-5 text-center">
          <h3 className="fw-bold mb-3" style={{ color: "#d63384" }}>
            Our Promise 💕
          </h3>
          <p className="fs-5 mx-auto" style={{ color: "#555", maxWidth: "800px" }}>
            Every dessert we create is baked with passion, decorated with creativity,
            and delivered with happiness. Whether you’re celebrating a birthday,
            anniversary, or just a sweet craving, we promise to make it memorable
            with a cake that’s as delightful as your moments.
          </p>
        </div>
      </div>
    </div>
    {/* <Footer/> */}
    </>
  );
}

export default About;
