import React from "react";
import {
  FaEdit,
  FaTrash,
  FaEye
} from "react-icons/fa";


const CustomerTable = ({
  customers,
  editCustomer,
  deleteCustomer,
  viewCustomer
}) => {


  return (

    <div className="card shadow border-0 mt-4">


      <div className="card-header bg-primary text-white">

        <h4 className="mb-0">

          Customer List

        </h4>

      </div>





      <div className="table-responsive">


        <table className="table table-hover align-middle mb-0">


          <thead className="table-dark">


            <tr>

              <th>Name</th>

              <th>Email</th>

              <th>Phone</th>

              <th>Company</th>

              <th>Status</th>

              <th>Actions</th>

            </tr>


          </thead>





          <tbody>


          {

            customers.length > 0 ?


            customers.map((customer)=>(


              <tr key={customer._id}>


                <td className="fw-bold">

                  {customer.name}

                </td>



                <td>

                  {customer.email}

                </td>




                <td>

                  {customer.phone}

                </td>





                <td>

                  {customer.company || "N/A"}

                </td>





                <td>


                  {

                    customer.status === "Active"


                    ?

                    <span className="badge bg-success">

                      Active

                    </span>


                    :


                    <span className="badge bg-danger">

                      Inactive

                    </span>


                  }


                </td>






                <td>


                  <button

                    className="btn btn-sm btn-info text-white me-2"

                    onClick={()=>viewCustomer(customer)}

                  >

                    <FaEye />

                  </button>





                  <button

                    className="btn btn-sm btn-warning me-2"

                    onClick={()=>editCustomer(customer)}

                  >

                    <FaEdit />

                  </button>






                  <button

                    className="btn btn-sm btn-danger"

                    onClick={()=>deleteCustomer(customer._id)}

                  >

                    <FaTrash />

                  </button>



                </td>



              </tr>



            ))



            :


            <tr>

              <td
                colSpan="6"
                className="text-center py-4"
              >

                No Customers Found


              </td>

            </tr>


          }



          </tbody>


        </table>


      </div>


    </div>


  );

};


export default CustomerTable;