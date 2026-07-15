import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      alert("All fields are required");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "https://batch25-be-x9el.onrender.com/api/users/register",
        form
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Registration Successful");

      navigate("/login");
    } catch (err) {
      const message = err.response?.data?.message;

      if (message === "User already exists") {
        alert("User already exists");
      } else {
        alert(message || "Registration Failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-vh-100 d-flex justify-content-center align-items-center px-3"
      style={{
        background:
          "linear-gradient(135deg,#2563eb,#3b82f6,#60a5fa)",
      }}
    >
      <div
        className="bg-white shadow-lg rounded-4 p-4 p-md-5"
        style={{
          maxWidth: "450px",
          width: "100%",
        }}
      >
        <div className="text-center mb-4">
          <div
            className="rounded-circle mx-auto d-flex align-items-center justify-content-center mb-3"
            style={{
              width: "75px",
              height: "75px",
              background: "#2563eb",
              color: "white",
              fontSize: "28px",
              fontWeight: "bold",
            }}
          >
            CRM
          </div>

          <h2 className="fw-bold">Create Account</h2>

          <p className="text-secondary">
            Register to access your CRM Dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Name */}

          <div className="mb-3">
            <label className="form-label fw-semibold">
              Full Name
            </label>

            <div className="input-group">
              <span className="input-group-text">
                <FaUser />
              </span>

              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Email */}

          <div className="mb-3">
            <label className="form-label fw-semibold">
              Email
            </label>

            <div className="input-group">
              <span className="input-group-text">
                <FaEnvelope />
              </span>

              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Password */}

          <div className="mb-4">
            <label className="form-label fw-semibold">
              Password
            </label>

            <div className="input-group">
              <span className="input-group-text">
                <FaLock />
              </span>

              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder="Enter password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>
            </div>
          </div>

          <button
            className="btn btn-success w-100 py-2 fw-semibold"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Register"}
          </button>
        </form>

        <div className="text-center mt-4">
          Already have an account?

          <Link
            to="/login"
            className="text-decoration-none fw-bold ms-2"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;