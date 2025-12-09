import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cakes.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cakeData from './cakes.json'




function Cakes() {
  const navigate = useNavigate();

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(json => console.log("json data",json))
  },[])

  // 🛒 Add to Cart (with Toast)
  const addToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const exists = cart.find((c) => c.id === item.id);

    if (exists) {
      cart = cart.map((c) =>
        c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
      );
    } else {
      cart.push({ ...item, quantity: 1 });
    }

    localStorage.setItem("cartItems", JSON.stringify(cart));

    toast.success(`${item.name} added to cart 🎂`, {
      position: "top-center",
      autoClose: 2000,
      style: {
        backgroundColor: "#ffe6f0",
        color: "#d63384",
        fontWeight: "bold",
        borderRadius: "10px",
      },
    });
  };

  // 🧁 Go to Order Page
  const goToOrderPage = (cakeId) => {
    navigate(`/order/${cakeId}`);
  };

  return (
    <>
  
    <div className="cakes-page">
      <div className="container py-5">
        <h1 className="text-center mb-4 text-pink fw-bold">
          Our Delicious Cakes 🎂
        </h1>

        <div className="row">
          {cakeData.map((cake) => (
            <div key={cake.id} className="col-md-3 mb-4">
              <div className="card cake-card shadow-sm border-0">

                {/* 🍰 Clickable Image */}
                <img
                  src={cake.img}
                  alt={cake.name}
                  className="card-img-top rounded-top"
                  style={{ cursor: "pointer" }}
                  onClick={() => goToOrderPage(cake.id)}
                />

                <div className="card-body text-center">
                  <h5 className="card-title fw-bold text-dark">{cake.name}</h5>
                  <p className="card-text text-pink fw-semibold">
                    ₹{cake.price}
                  </p>

                  {/* 🛒 Add to Cart */}
                  <button
                    className="btn btn-pink me-2 fw-bold"
                    onClick={() => addToCart(cake)}
                  >
                    Add to Cart
                  </button>

                  {/* 🧁 Order Now */}
                  <button
                    className="btn btn-outline-pink fw-bold"
                    onClick={() => goToOrderPage(cake.id)}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Toast Container */}
        <ToastContainer />
      </div>
    </div>
   
    </>
  );
}

export default Cakes;
