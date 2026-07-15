import React from "react";
import {
  FaUsers,
  FaUserPlus,
  FaDownload,
  FaChartBar,
  FaChartPie,
  FaFilePdf,
  FaFileExcel,
} from "react-icons/fa";

const Reports = () => {
  const reportCards = [
    {
      title: "Total Customers",
      value: "150",
      color: "primary",
      icon: <FaUsers size={30} />,
    },
    {
      title: "New Customers",
      value: "18",
      color: "success",
      icon: <FaUserPlus size={30} />,
    },
    {
      title: "Monthly Sales",
      value: "$25,000",
      color: "warning",
      icon: <FaChartBar size={30} />,
    },
    {
      title: "Growth",
      value: "78%",
      color: "danger",
      icon: <FaChartPie size={30} />,
    },
  ];

  return (
    <div className="container mt-4">

      <h2 className="fw-bold text-center mb-4">
        CRM Reports Dashboard
      </h2>

      {/* Summary Cards */}
      <div className="row">

        {reportCards.map((card, index) => (
          <div className="col-lg-3 col-md-6 mb-4" key={index}>
            <div
              className={`card shadow border-0 bg-${card.color} text-white h-100`}
              style={{
                transition: "0.3s",
                cursor: "pointer",
                borderRadius: "15px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-8px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0px)";
              }}
            >
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <h6>{card.title}</h6>

                  <h2>{card.value}</h2>
                </div>

                {card.icon}
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* Reports Table */}

      <div className="card shadow border-0 mt-3">

        <div className="card-header bg-dark text-white">
          <h4 className="mb-0">
            Monthly Report
          </h4>
        </div>

        <div className="table-responsive">

          <table className="table table-hover mb-0">

            <thead className="table-primary">

              <tr>
                <th>Month</th>
                <th>Customers</th>
                <th>Revenue</th>
                <th>Growth</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td>January</td>
                <td>22</td>
                <td>$4500</td>
                <td className="text-success">
                  +10%
                </td>
              </tr>

              <tr>
                <td>February</td>
                <td>31</td>
                <td>$6100</td>
                <td className="text-success">
                  +18%
                </td>
              </tr>

              <tr>
                <td>March</td>
                <td>40</td>
                <td>$9000</td>
                <td className="text-success">
                  +30%
                </td>
              </tr>

              <tr>
                <td>April</td>
                <td>57</td>
                <td>$12000</td>
                <td className="text-success">
                  +45%
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

      {/* Export Buttons */}

      <div className="card shadow border-0 mt-4">

        <div className="card-body">

          <h4 className="mb-3">
            Export Reports
          </h4>

          <button className="btn btn-danger me-3">
            <FaFilePdf className="me-2" />
            Export PDF
          </button>

          <button className="btn btn-success me-3">
            <FaFileExcel className="me-2" />
            Export Excel
          </button>

          <button className="btn btn-primary">
            <FaDownload className="me-2" />
            Download Summary
          </button>

        </div>

      </div>

    </div>
  );
};

export default Reports;