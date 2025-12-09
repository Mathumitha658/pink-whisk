import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // ✅ Email validation
    if (!email) {
      errors.email = "⚠️ Please enter your email.";
    } else if (!emailPattern.test(email)) {
      errors.email = "📧 Please enter a valid email address.";
    }

    // ✅ Password validation
    if (!password) {
      errors.password = "⚠️ Please enter your password.";
    } else if (password.length < 6) {
      errors.password = "🔒 Password must be at least 6 characters long.";
    }

    // ✅ Set all field errors
    setError(errors);

    // ❌ Stop if any error exists
    if (Object.keys(errors).length > 0) return;

    // ✅ Success message
    alert("🎉 Login successful! Welcome back to Pink Whisk 💖");
    navigate("/"); // Redirect to homepage
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center vh-100">
      <div className="card login-card shadow-lg p-4">
        <h2 className="text-center fw-bold brand-text mb-3">🍰 Pink Whisk</h2>
        <h4 className="text-center mb-4">Login</h4>

        <form onSubmit={handleSubmit}>
          {/* 🩷 Email Field */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className={`form-control ${error.email ? "is-invalid" : ""}`}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error.email && (
              <div
                className="small mt-1"
                style={{ color: "#d63384", fontWeight: "500" }}
              >
                {error.email}
              </div>
            )}
          </div>

          {/* 🩷 Password Field */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className={`form-control ${error.password ? "is-invalid" : ""}`}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error.password && (
              <div
                className="small mt-1"
                style={{ color: "#d63384", fontWeight: "500" }}
              >
                {error.password}
              </div>
            )}
          </div>

          {/* 🩷 Login Button */}
          <button type="submit" className="btn login-btn w-100 fw-bold">
            Login
          </button>

          {/* 🩷 Register Link */}
          <p className="text-center mt-3">
            Don’t have an account?{" "}
            <Link to="/register" className="link-pink fw-bold">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
