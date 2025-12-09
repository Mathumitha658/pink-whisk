import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // 🩷 Field-wise validation
    if (!name.trim()) newErrors.name = "⚠️ Please enter your full name.";
    if (!email.trim()) newErrors.email = "⚠️ Please enter your email.";
    else if (!emailPattern.test(email))
      newErrors.email = "📧 Please enter a valid email address.";
    if (!password.trim()) newErrors.password = "⚠️ Please enter a password.";
    else if (password.length < 6)
      newErrors.password = "🔒 Password must be at least 6 characters long.";
    if (!confirmPassword.trim())
      newErrors.confirmPassword = "⚠️ Please confirm your password.";
    else if (password !== confirmPassword)
      newErrors.confirmPassword = "❌ Passwords do not match.";

    setErrors(newErrors);

    // Stop submission if any error exists
    if (Object.keys(newErrors).length > 0) return;

    // 🩷 Success message
    alert("🎉 Registration Successful! Welcome to Pink Whisk 💖");
    navigate("/login");
  };

  return (
    <div className="register-container d-flex justify-content-center align-items-center vh-100">
      <div className="register-card shadow-lg p-4 rounded">
        <h2 className="text-center mb-4 text-pink">Create Your Account 💖</h2>

        <form onSubmit={handleSubmit} noValidate>
          {/* 🩷 Full Name */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Full Name</label>
            <input
              type="text"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            {errors.name && (
              <div
                className="invalid-feedback d-block"
                style={{ color: "#d63384", fontWeight: "500" }}
              >
                {errors.name}
              </div>
            )}
          </div>

          {/* 🩷 Email */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Email Address</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && (
              <div
                className="invalid-feedback d-block"
                style={{ color: "#d63384", fontWeight: "500" }}
              >
                {errors.email}
              </div>
            )}
          </div>

          {/* 🩷 Password */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
            {errors.password && (
              <div
                className="invalid-feedback d-block"
                style={{ color: "#d63384", fontWeight: "500" }}
              >
                {errors.password}
              </div>
            )}
          </div>

          {/* 🩷 Confirm Password */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Confirm Password</label>
            <input
              type="password"
              className={`form-control ${
                errors.confirmPassword ? "is-invalid" : ""
              }`}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
            />
            {errors.confirmPassword && (
              <div
                className="invalid-feedback d-block"
                style={{ color: "#d63384", fontWeight: "500" }}
              >
                {errors.confirmPassword}
              </div>
            )}
          </div>

          <button type="submit" className="btn btn-pink w-100 fw-bold">
            Register
          </button>
        </form>

        <p className="text-center mt-3">
          Already have an account?{" "}
          <a href="/login" className="text-pink fw-bold">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
