import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const cakeData = [
  {
    id: 1,
    name: "Strawberry Delight",
    price: "₹799",
    img: "../images/strawberry.jpg",
  },
  {
    id: 2,
    name: "Chocolate Heaven",
    price: "₹899",
    img: "../images/chocolate.jpeg",
  },
  {
    id: 3,
    name: "Vanilla Dream",
    price: "₹749",
    img: "../images/vanila.jpeg",
  },
  {
    id: 4,
    name: "Red Velvet Bliss",
    price: "₹999",
    img: "../images/redvelvet.jpeg",
  },
];

function Order() {
  const { id } = useParams();
  const navigate = useNavigate();
  const selectedCake = cakeData.find((cake) => cake.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);

  if (!selectedCake) {
    return (
      <div className="text-center mt-5 text-danger">
        <h3>Product not found 😢</h3>
      </div>
    );
  }

  // Convert price string like "₹799" to number 799
  const basePrice = parseInt(selectedCake.price.replace("₹", ""));
  const totalPrice = basePrice * quantity;

  const handleBuyNow = () => {
    navigate("/orderdetails", {
      state: { cake: selectedCake, quantity: quantity },
    });
  };

  return (
    <div className="container py-5">
      <h1 className="text-center text-pink fw-bold mb-4">Order Summary</h1>

      <div className="card shadow-sm p-4 mx-auto" style={{ maxWidth: "500px" }}>
        <div className="text-center mb-3">
          <img
            src={selectedCake.img}
            alt={selectedCake.name}
            className="img-fluid rounded"
            style={{ width: "180px", height: "180px", objectFit: "cover" }}
          />
        </div>

        <h4 className="text-center fw-bold">{selectedCake.name}</h4>
        <p className="text-center text-pink fw-semibold mb-2">
          Price per cake: {selectedCake.price}
        </p>

        {/* Quantity input */}
        <div className="text-center mb-3">
          <label className="fw-semibold me-2">Quantity:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="text-center border rounded"
            style={{ width: "60px" }}
          />
        </div>

        {/* Show total dynamically */}
        <h5 className="text-center fw-bold text-success mb-4">
          Total Amount: ₹{totalPrice}
        </h5>

        <div className="text-center">
          <button
            className="btn btn-pink px-4"
            onClick={handleBuyNow}
          >
            Buy Now 💖
          </button>
        </div>
      </div>
    </div>
  );
}

export default Order;
