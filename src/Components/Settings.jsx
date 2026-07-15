import React, { useState } from "react";
import {
  FaMoon,
  FaBell,
  FaGlobe,
  FaLock,
  FaSave,
} from "react-icons/fa";

const Settings = () => {
  const [settings, setSettings] = useState({
    darkMode: false,
    notifications: true,
    language: "English",
    twoFactor: false,
  });

  const handleToggle = (key) => {
    setSettings({
      ...settings,
      [key]: !settings[key],
    });
  };

  const saveSettings = () => {
    alert("Settings Saved Successfully");
  };

  return (
    <div className="container mt-4">

      <div className="card shadow-lg border-0">

        <div className="card-header bg-dark text-white">

          <h3 className="mb-0">
            Settings
          </h3>

        </div>

        <div className="card-body">

          <div className="form-check form-switch mb-4">

            <input
              className="form-check-input"
              type="checkbox"
              checked={settings.darkMode}
              onChange={() => handleToggle("darkMode")}
            />

            <label className="form-check-label">

              <FaMoon className="me-2" />

              Dark Mode

            </label>

          </div>

          <div className="form-check form-switch mb-4">

            <input
              className="form-check-input"
              type="checkbox"
              checked={settings.notifications}
              onChange={() =>
                handleToggle("notifications")
              }
            />

            <label className="form-check-label">

              <FaBell className="me-2" />

              Notifications

            </label>

          </div>

          <div className="mb-4">

            <label className="form-label">

              <FaGlobe className="me-2" />

              Language

            </label>

            <select
              className="form-select"
              value={settings.language}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  language: e.target.value,
                })
              }
            >
              <option>English</option>
              <option>Tamil</option>
              <option>Hindi</option>
            </select>

          </div>

          <div className="form-check form-switch mb-4">

            <input
              className="form-check-input"
              type="checkbox"
              checked={settings.twoFactor}
              onChange={() =>
                handleToggle("twoFactor")
              }
            />

            <label className="form-check-label">

              <FaLock className="me-2" />

              Enable Two-Factor Authentication

            </label>

          </div>

          <button
            className="btn btn-primary"
            onClick={saveSettings}
          >

            <FaSave className="me-2" />

            Save Settings

          </button>

        </div>

      </div>

    </div>
  );
};

export default Settings;