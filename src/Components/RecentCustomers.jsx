import React from "react";

const RecentCustomers = ({ customers }) => {
  const recent = [...customers].slice(-5).reverse();

  return (
    <div className="card shadow border-0 mt-4">

      <div className="card-header bg-success text-white">
        <h5 className="mb-0">
          Recent Customers
        </h5>
      </div>

      <div className="card-body">

        {recent.length === 0 ? (
          <p className="text-muted">
            No customers found.
          </p>
        ) : (
          recent.map((customer) => (
            <div
              key={customer._id}
              className="border-bottom py-2"
            >
              <h6 className="mb-1">
                {customer.name}
              </h6>

              <small className="text-muted">
                {customer.email}
              </small>

              <br />

              <small>
                {customer.phone}
              </small>
            </div>
          ))
        )}

      </div>

    </div>
  );
};

export default RecentCustomers;