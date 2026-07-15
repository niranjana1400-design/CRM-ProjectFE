import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();

  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const menu = [
    {
      name: "Dashboard",
      path: "/users",
      icon: <FaHome />,
    },
    {
      name: "Customers",
      path: "/users",
      icon: <FaUsers />,
    },
    {
      name: "Reports",
      path: "/reports",
      icon: <FaChartBar />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <FaCog />,
    },
  ];

  return (
    <div
      className="bg-dark text-white p-3"
      style={{
        width: "250px",
        minHeight: "100vh",
      }}
    >
      <h3 className="text-center mb-4 fw-bold">
        CRM
      </h3>

      {menu.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className={`d-flex align-items-center text-decoration-none p-3 rounded mb-2 ${
            location.pathname === item.path
              ? "bg-primary text-white"
              : "text-light"
          }`}
        >
          <span className="me-3">
            {item.icon}
          </span>

          {item.name}
        </Link>
      ))}

      <button
        onClick={logout}
        className="btn btn-danger w-100 mt-4"
      >
        <FaSignOutAlt className="me-2" />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;