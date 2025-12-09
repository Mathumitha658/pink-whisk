import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./CupCakes.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CupCakes() {
  const navigate = useNavigate();

  // ⭐ Cupcakes Data (JSON inside same file)
  const cupcakeData = [
    {
      id: 1,
      name: "Chocolate Cupcake",
      price: 70,
      img: "/images/chococup.jpg"
    },
    {
      id: 2,
      name: "Vanilla Cream Cupcake",
      price: 65,
      img: "/images/vanilacup.webp"
    },
    {
      id: 3,
      name: "Strawberry Cupcake",
      price: 80,
      img: "/images/strawcup.jpg"
    },
    {
      id: 4,
      name: "Red Velvet Cupcake",
      price: 90,
      img: "/images/redvelcup.jpg"
    },
    {
      id: 5,
      name: "Blueberry Cupcake",
      price: 85,
      img: "/images/bluecup.webp"
    },
    {
      id: 6,
      name: "Oreo Crush Cupcake",
      price: 95,
      img: "/images/oreocup.jpg"
    },
    {
      id: 7,
      name: "Butterscotch Cupcake",
      price: 75,
      img: "/images/butter.webp"
    },
    {
      id: 8,
      name: "Caramel Swirl Cupcake",
      price: 100,
      img: "/images/cara.jpg"
    }
  ];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => console.log("json data", json));
  }, []);

  // 🧁 Add to Cart
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

    toast.success(`${item.name} added to cart 🧁`, {
      position: "top-center",
      autoClose: 2000,
      style: {
        backgroundColor: "#fff0f6",
        color: "#d63384",
        fontWeight: "bold",
        borderRadius: "10px"
      }
    });
  };

  // 👉 Order Page Navigation
  const goToOrderPage = (id) => {
    navigate(`/order/cupcake/${id}`);
  };

  return (
    <>
      <div className="cakes-page">
        <div className="container py-5">
          <h1 className="text-center mb-4 text-pink fw-bold">
            Our Fresh Cupcakes 🧁
          </h1>

          <div className="row">
            {cupcakeData.map((cupcake) => (
              <div key={cupcake.id} className="col-md-3 mb-4">
                <div className="card cake-card shadow-sm border-0">

                  {/* 🧁 Image */}
                  <img
                    src={cupcake.img}
                    alt={cupcake.name}
                    className="card-img-top rounded-top"
                    style={{ cursor: "pointer" }}
                    onClick={() => goToOrderPage(cupcake.id)}
                  />

                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold text-dark">
                      {cupcake.name}
                    </h5>

                    <p className="card-text text-pink fw-semibold">
                      ₹{cupcake.price}
                    </p>

                    {/* 🛒 Add to Cart */}
                    <button
                      className="btn btn-pink me-2 fw-bold"
                      onClick={() => addToCart(cupcake)}
                    >
                      Add to Cart
                    </button>

                    {/* 🔥 Order Now */}
                    <button
                      className="btn btn-outline-pink fw-bold"
                      onClick={() => goToOrderPage(cupcake.id)}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default CupCakes;
