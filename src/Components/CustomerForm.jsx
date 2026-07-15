import React from "react";

const CustomerForm = ({
  form,
  handleChange,
  addCustomer,
  updateCustomer,
  editId,
}) => {


  return (

    <div className="card shadow p-4 mb-4 border-0">


      <h4 className="mb-3 fw-bold">

        {editId
          ? "Update Customer"
          : "Add New Customer"}

      </h4>



      <div className="row">


        <div className="col-md-6 mb-3">

          <label className="form-label">
            Customer Name
          </label>

          <input

            className="form-control"

            name="name"

            placeholder="Enter customer name"

            value={form.name}

            onChange={handleChange}

          />

        </div>





        <div className="col-md-6 mb-3">

          <label className="form-label">
            Email
          </label>


          <input

            className="form-control"

            name="email"

            placeholder="Enter email"

            value={form.email}

            onChange={handleChange}

          />


        </div>






        <div className="col-md-6 mb-3">

          <label className="form-label">
            Phone
          </label>


          <input

            className="form-control"

            name="phone"

            placeholder="Enter phone number"

            value={form.phone}

            onChange={handleChange}

          />


        </div>







        <div className="col-md-6 mb-3">

          <label className="form-label">
            Company Name
          </label>


          <input

            className="form-control"

            name="company"

            placeholder="Company name"

            value={form.company}

            onChange={handleChange}

          />


        </div>







        <div className="col-md-6 mb-3">

          <label className="form-label">
            Status
          </label>


          <select

            className="form-select"

            name="status"

            value={form.status}

            onChange={handleChange}

          >

            <option value="">
              Select Status
            </option>

            <option value="Active">
              Active
            </option>


            <option value="Inactive">
              Inactive
            </option>


          </select>


        </div>







        <div className="col-md-6 mb-3">

          <label className="form-label">
            Industry
          </label>


          <input

            className="form-control"

            name="industry"

            placeholder="IT, Healthcare, Finance..."

            value={form.industry}

            onChange={handleChange}

          />


        </div>







        <div className="col-md-12 mb-3">

          <label className="form-label">
            Address
          </label>


          <textarea

            className="form-control"

            rows="3"

            name="address"

            placeholder="Customer address"

            value={form.address}

            onChange={handleChange}

          />


        </div>







        <div className="col-md-12 mb-3">

          <label className="form-label">
            Notes
          </label>


          <textarea

            className="form-control"

            rows="2"

            name="notes"

            placeholder="Additional notes"

            value={form.notes}

            onChange={handleChange}

          />


        </div>


      </div>





      {

        editId ?


        <button

          className="btn btn-warning"

          onClick={updateCustomer}

        >

          Update Customer

        </button>



        :



        <button

          className="btn btn-success"

          onClick={addCustomer}

        >

          Add Customer

        </button>


      }


    </div>

  );

};


export default CustomerForm;