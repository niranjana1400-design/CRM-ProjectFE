import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        "https://batch25-be-x9el.onrender.com/api/users/login",
        form
      );

      const token =
        res.data.token?.token ||
        res.data.token ||
        res.data.accessToken ||
        "";

      if (!token) {
        alert("No token received");
        return;
      }

      localStorage.setItem("token", token.replace(/"/g, ""));

      alert("Login Successful");

      navigate("/users");
    } catch (err) {
      alert(err.response?.data?.message || "Invalid Credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center px-3"
      style={{
        background:
          "linear-gradient(135deg,#2563eb,#3b82f6,#60a5fa)",
      }}
    >
      <div
        className="bg-white rounded-4 shadow-lg p-4 p-md-5"
        style={{
          maxWidth: "430px",
          width: "100%",
        }}
      >
        {/* Logo */}

        <div className="text-center mb-4">

          <div
            className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle"
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

          <h2 className="fw-bold text-dark">
            Welcome Back
          </h2>

          <p className="text-secondary">
            Login to your CRM Dashboard
          </p>

        </div>

        <form onSubmit={handleLogin}>

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
                name="email"
                className="form-control"
                placeholder="Enter your email"
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
                name="password"
                className="form-control"
                placeholder="Enter password"
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

          {/* Remember */}

          <div className="d-flex justify-content-between mb-4">

            <div className="form-check">

              <input
                className="form-check-input"
                type="checkbox"
              />

              <label className="form-check-label">
                Remember Me
              </label>

            </div>

            <span
              style={{
                color: "#2563eb",
                cursor: "pointer",
                fontWeight: 500,
              }}
            >
              Forgot Password?
            </span>

          </div>

          {/* Login Button */}

          <button
            type="submit"
            className="btn btn-primary w-100 py-2 fw-semibold"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        <div className="text-center mt-4">

          <p className="mb-0">

            Don't have an account?{" "}

            <Link
              to="/register"
              className="text-decoration-none fw-bold"
            >
              Register
            </Link>

          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;