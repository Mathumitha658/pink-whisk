import React, { useEffect, useState } from "react";

function CartPage() {
  const [cart, setCart] = useState([]);

  // Load items from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCart(savedCart);
  }, []);

  // Remove from cart
  const removeFromCart = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  // Calculate total
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container py-5 text-center">
      <h2 className="fw-bold text-pink mb-4">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-secondary">Your cart is empty 😢</p>
      ) : (
        <div className="row justify-content-center">
          {cart.map((item) => (
            <div
              key={item.id}
              className="card shadow-sm border-0 mb-4"
              style={{ width: "18rem", backgroundColor: "#ffe6f0" }}
            >
              <img
                src={item.img}
                alt={item.name}
                className="card-img-top rounded-top"
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold text-dark">{item.name}</h5>
                <p className="card-text text-pink fw-semibold">
                  ₹{item.price} × {item.quantity} = ₹
                  {item.price * item.quantity}
                </p>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <h4 className="fw-bold text-dark">Total Amount: ₹{total}</h4>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
