import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function OrderDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cake, quantity } = location.state || {};

  if (!cake) {
    return (
      <div className="text-center mt-5 text-danger">
        <h3>No order details found 😢</h3>
      </div>
    );
  }

  const totalPrice = parseInt(cake.price.replace("₹", "")) * quantity;

  // 🎉 Confirm Order Function (Toast Popup)
  const handleConfirm = () => {
    toast.success(`🎉 Order placed successfully!\n${cake.name} x${quantity}`, {
      position: "top-center",
      autoClose: 2500,
      style: {
        backgroundColor: "#ffe6f0",
        color: "#d63384",
        fontWeight: "bold",
        borderRadius: "12px",
      },
      onClose: () => navigate("/"), // Redirect after toast closes
    });
  };

  return (
    <div className="container py-5">
      <h1 className="text-center text-pink fw-bold mb-4">Order Details 💝</h1>

      <div
        className="card shadow-lg p-4 mx-auto border-0"
        style={{
          maxWidth: "600px",
          borderRadius: "15px",
          backgroundColor: "#fff0f5",
        }}
      >
        <div className="text-center mb-3">
          <img
            src={cake.img}
            alt={cake.name}
            className="img-fluid rounded shadow-sm"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
        </div>

        <h4 className="text-center fw-bold">{cake.name}</h4>
        <p className="text-center text-pink fw-semibold">{cake.price}</p>

        <hr />
        <p><strong>Quantity:</strong> {quantity}</p>
        <p><strong>Total:</strong> ₹{totalPrice}</p>
        <p><strong>Delivery:</strong> 3 - 5 days 🚚</p>

        <div className="text-center mt-3">
          <button
            className="btn fw-bold px-4"
            style={{
              backgroundColor: "#ff66a3",
              color: "white",
              borderRadius: "10px",
            }}
            onClick={handleConfirm}
          >
            Confirm Order ✅
          </button>
        </div>
      </div>

      {/* Toast Message Container */}
      <ToastContainer />
    </div>
  );
}

export default OrderDetails;
