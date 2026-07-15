import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaIndustry,
  FaMapMarkerAlt,
  FaStickyNote,
  FaCalendarAlt,
} from "react-icons/fa";

const CustomerProfile = ({ customer, onClose }) => {
  if (!customer) return null;

  return (
    <div
      className="modal fade show d-block"
      style={{ background: "rgba(0,0,0,0.6)" }}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content shadow-lg border-0">

          <div className="modal-header bg-primary text-white">
            <h4 className="mb-0">Customer Profile</h4>

            <button
              className="btn-close btn-close-white"
              onClick={onClose}
            ></button>
          </div>

          <div className="modal-body">

            <div className="text-center mb-4">

              <img
                src={`https://ui-avatars.com/api/?name=${customer.name}&background=0D6EFD&color=fff&size=150`}
                alt="avatar"
                className="rounded-circle shadow"
              />

              <h3 className="mt-3">{customer.name}</h3>

              <span
                className={`badge ${
                  customer.status === "Active"
                    ? "bg-success"
                    : "bg-danger"
                }`}
              >
                {customer.status}
              </span>

            </div>

            <div className="row">

              <div className="col-md-6 mb-3">
                <strong><FaEnvelope /> Email</strong>
                <p>{customer.email}</p>
              </div>

              <div className="col-md-6 mb-3">
                <strong><FaPhone /> Phone</strong>
                <p>{customer.phone}</p>
              </div>

              <div className="col-md-6 mb-3">
                <strong><FaBuilding /> Company</strong>
                <p>{customer.company || "N/A"}</p>
              </div>

              <div className="col-md-6 mb-3">
                <strong><FaIndustry /> Industry</strong>
                <p>{customer.industry || "N/A"}</p>
              </div>

              <div className="col-md-12 mb-3">
                <strong><FaMapMarkerAlt /> Address</strong>
                <p>{customer.address || "N/A"}</p>
              </div>

              <div className="col-md-12 mb-3">
                <strong><FaStickyNote /> Notes</strong>
                <p>{customer.notes || "No Notes"}</p>
              </div>

              <div className="col-md-12">
                <strong><FaCalendarAlt /> Created On</strong>
                <p>
                  {customer.createdAt
                    ? new Date(customer.createdAt).toLocaleDateString()
                    : "N/A"}
                </p>
              </div>

            </div>

          </div>

          <div className="modal-footer">
            <button
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;