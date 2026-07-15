import React from "react";
import {
  FaUserPlus,
  FaEdit,
  FaTrash,
  FaFileExport,
} from "react-icons/fa";

const RecentActivity = () => {

  const activity = [

    {
      icon: <FaUserPlus />,
      title: "New customer added",
      color: "success",
      time: "5 mins ago",
    },

    {
      icon: <FaEdit />,
      title: "Customer updated",
      color: "primary",
      time: "25 mins ago",
    },

    {
      icon: <FaTrash />,
      title: "Customer deleted",
      color: "danger",
      time: "40 mins ago",
    },

    {
      icon: <FaFileExport />,
      title: "Excel exported",
      color: "warning",
      time: "1 hour ago",
    },

  ];

  return (

    <div className="card shadow border-0 mt-4">

      <div className="card-header bg-dark text-white">

        <h4>
          Recent Activity
        </h4>

      </div>

      <div className="card-body">

        {

          activity.map((item, index) => (

            <div
              key={index}
              className="d-flex justify-content-between align-items-center border-bottom py-3"
            >

              <div className="d-flex align-items-center">

                <div
                  className={`bg-${item.color} text-white rounded-circle p-3 me-3`}
                >

                  {item.icon}

                </div>

                <div>

                  <h6 className="mb-1">

                    {item.title}

                  </h6>

                  <small>

                    {item.time}

                  </small>

                </div>

              </div>

            </div>

          ))

        }

      </div>

    </div>

  );

};

export default RecentActivity;