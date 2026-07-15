import React from "react";

const StatusFilter = ({ status, setStatus }) => {

  return (
    <div className="mb-3">

      <label className="fw-bold me-2">
        Filter Status:
      </label>


      <select
        className="form-select d-inline-block"
        style={{
          width:"200px"
        }}
        value={status}
        onChange={(e)=>setStatus(e.target.value)}
      >

        <option value="All">
          All Customers
        </option>


        <option value="Active">
          Active
        </option>


        <option value="Inactive">
          Inactive
        </option>


      </select>

    </div>
  );
};


export default StatusFilter;