import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaUsers,
  FaUserPlus,
  FaSignOutAlt,
  FaSignInAlt,
  FaHome,
} from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Logged out successfully");

    navigate("/login");
  };

  const activeStyle = {
    color: "#0d6efd",
    fontWeight: "bold",
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow"
      style={{
        background: "linear-gradient(to right,#0f172a,#1e3a8a)",
      }}
    >
      <div className="container">

        <Link
          className="navbar-brand fw-bold fs-4"
          to="/users"
        >
          CRM System
        </Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbar"
        >
          <ul className="navbar-nav ms-auto align-items-center">

            {token ? (
              <>
                <li className="nav-item me-3">

                  <Link
                    to="/users"
                    className="nav-link"
                    style={
                      location.pathname === "/users"
                        ? activeStyle
                        : {}
                    }
                  >
                    <FaHome className="me-2" />
                    Dashboard
                  </Link>

                </li>

                <li className="nav-item me-3">

                  <Link
                    to="/users"
                    className="nav-link"
                  >
                    <FaUsers className="me-2" />
                    Customers
                  </Link>

                </li>

                <li className="nav-item">

                  <button
                    onClick={logout}
                    className="btn btn-danger rounded-pill px-4"
                  >
                    <FaSignOutAlt className="me-2" />
                    Logout
                  </button>

                </li>
              </>
            ) : (
              <>
                <li className="nav-item me-3">

                  <Link
                    to="/login"
                    className="nav-link"
                    style={
                      location.pathname === "/login"
                        ? activeStyle
                        : {}
                    }
                  >
                    <FaSignInAlt className="me-2" />
                    Login
                  </Link>

                </li>

                <li className="nav-item">

                  <Link
                    to="/register"
                    className="btn btn-success rounded-pill px-4"
                  >
                    <FaUserPlus className="me-2" />
                    Register
                  </Link>
                  <Link className="nav-link" to="/reports">
    Reports
</Link>
 
                </li>
              </>
            )}
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;