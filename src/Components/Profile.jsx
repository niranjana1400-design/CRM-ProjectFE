import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCamera,
  FaSave,
} from "react-icons/fa";

const Profile = () => {
  const [user, setUser] = useState({
    name: "Niranjana S",
    email: "niranjana1400@gmail.com",
    phone: "+91 9876543210",
    role: "CRM Administrator",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const saveProfile = () => {
    alert("Profile Updated Successfully");
  };

  return (
    <div className="container mt-4">

      <div className="card shadow-lg border-0">

        <div className="card-header bg-primary text-white">

          <h3 className="mb-0">
            My Profile
          </h3>

        </div>

        <div className="card-body">

          <div className="text-center mb-4">

            <img
              src="https://i.pravatar.cc/150"
              alt="profile"
              className="rounded-circle shadow"
              width="150"
              height="150"
            />

            <br />

            <button className="btn btn-outline-primary mt-3">

              <FaCamera className="me-2" />

              Change Photo

            </button>

          </div>

          <div className="row">

            <div className="col-md-6 mb-3">

              <label className="form-label">
                Name
              </label>

              <div className="input-group">

                <span className="input-group-text">
                  <FaUser />
                </span>

                <input
                  className="form-control"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                />

              </div>

            </div>

            <div className="col-md-6 mb-3">

              <label className="form-label">
                Email
              </label>

              <div className="input-group">

                <span className="input-group-text">
                  <FaEnvelope />
                </span>

                <input
                  className="form-control"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                />

              </div>

            </div>

            <div className="col-md-6 mb-3">

              <label className="form-label">
                Phone
              </label>

              <div className="input-group">

                <span className="input-group-text">
                  <FaPhone />
                </span>

                <input
                  className="form-control"
                  name="phone"
                  value={user.phone}
                  onChange={handleChange}
                />

              </div>

            </div>

            <div className="col-md-6 mb-3">

              <label className="form-label">
                Role
              </label>

              <input
                className="form-control"
                value={user.role}
                disabled
              />

            </div>

          </div>

          <button
            className="btn btn-success mt-3"
            onClick={saveProfile}
          >

            <FaSave className="me-2" />

            Save Profile

          </button>

        </div>

      </div>

    </div>
  );
};

export default Profile;