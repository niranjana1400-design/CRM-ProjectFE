import React from "react";
import {
  FaUsers,
  FaUserCheck,
  FaUserPlus,
  FaPhoneAlt,
} from "react-icons/fa";

const DashboardCards = ({ customers }) => {
  const totalCustomers = customers.length;

  const activeCustomers = customers.filter(
    (customer) => customer.status !== "Inactive"
  ).length;

  const newCustomers = customers.filter((customer) => {
    if (!customer.createdAt) return false;

    const today = new Date();
    const created = new Date(customer.createdAt);

    return (
      created.getDate() === today.getDate() &&
      created.getMonth() === today.getMonth() &&
      created.getFullYear() === today.getFullYear()
    );
  }).length;

  const totalContacts = customers.filter(
    (customer) => customer.phone
  ).length;

  const cards = [
    {
      title: "Total Customers",
      value: totalCustomers,
      color: "primary",
      icon: <FaUsers size={30} />,
    },
    {
      title: "Active Customers",
      value: activeCustomers,
      color: "success",
      icon: <FaUserCheck size={30} />,
    },
    {
      title: "New Today",
      value: newCustomers,
      color: "warning",
      icon: <FaUserPlus size={30} />,
    },
    {
      title: "Contact Numbers",
      value: totalContacts,
      color: "info",
      icon: <FaPhoneAlt size={30} />,
    },
  ];

  return (
    <div className="row mb-4">
      {cards.map((card, index) => (
        <div className="col-lg-3 col-md-6 mb-3" key={index}>
          <div
            className={`card border-0 shadow bg-${card.color} text-white h-100`}
            style={{
              transition: "0.3s",
              cursor: "pointer",
              borderRadius: "15px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
            }}
          >
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h6>{card.title}</h6>

                <h2 className="fw-bold">
                  {card.value}
                </h2>
              </div>

              <div>{card.icon}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;