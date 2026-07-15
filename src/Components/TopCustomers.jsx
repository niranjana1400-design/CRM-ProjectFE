import React from "react";

const TopCustomers = ({ customers }) => {

  const top = customers.slice(0,5);

  return (

    <div className="card shadow mt-4 border-0">

      <div className="card-header bg-primary text-white">

        <h4>

          Top Customers

        </h4>

      </div>

      <div className="table-responsive">

        <table className="table">

          <thead>

            <tr>

              <th>Name</th>

              <th>Email</th>

              <th>Phone</th>

            </tr>

          </thead>

          <tbody>

            {

              top.map(customer=>(

                <tr key={customer._id}>

                  <td>{customer.name}</td>

                  <td>{customer.email}</td>

                  <td>{customer.phone}</td>

                </tr>

              ))

            }

          </tbody>

        </table>

      </div>

    </div>

  );

};

export default TopCustomers;