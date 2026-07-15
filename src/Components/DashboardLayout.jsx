import React from "react";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="d-flex">

      <Sidebar />

      <div
        className="flex-grow-1p-4"
        style={{
          background: "#f5f7fb",
          minHeight: "100vh",
        }}
      >
        {children}
      </div>

    </div>
  );
};

export default DashboardLayout;