import React, { useState } from "react";
import { FaUserEdit, FaUserCircle } from "react-icons/fa";
import TextField from "@mui/material/TextField";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("editAccount");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const options = [
    { id: 1, label: "Notify me there are more than 10 Job applications" },
    { id: 2, label: "Notify me when lety has screened the candidates" },
    { id: 3, label: "Notify me When Lety has found the top candidates" },
    { id: 4, label: "Notify 5 days before the subscription ends" },
    { id: 5, label: "Add me to the email newsetters to new features" },
  ];

  const handleCheckboxChange = (id) => {
    setSelectedOptions(
      (prev) =>
        prev.includes(id)
          ? prev.filter((optionId) => optionId !== id) // Remove if already selected
          : [...prev, id] // Add if not already selected
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case "editAccount":
        return (
          <div>
            <h2 className="text-lg font-bold mb-2">Edit Account</h2>
            <p>Here you can edit your account details.</p>
          </div>
        );
      case "myProfile":
        return (
          <div>
            <h1>Account</h1>

            <div>
              <h2>Notification</h2>
              <div className="grid grid-cols-2 gap-4">
                {options.map((option) => (
                  <label
                    key={option.id}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedOptions.includes(option.id)}
                      onChange={() => handleCheckboxChange(option.id)}
                      className="form-checkbox text-blue-500"
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
              <hr />
              <div>
                <h1>Change Password</h1>
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <label>Current PassWord</label>
                    <TextField
                      id="outlined-basic"
                      label="Current PassWord"
                      variant="outlined"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label>New Password</label>
                    <TextField
                      id="outlined-basic"
                      label="New Password"
                      variant="outlined"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label>Confirm Password</label>
                    <TextField
                      id="outlined-basic"
                      label="Confirm Password"
                      variant="outlined"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div className="flex space-x-4 border-b pb-2 mb-4">
        <button
          className={`flex items-center space-x-2 py-2 px-4 ${
            activeTab === "editAccount"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("editAccount")}
        >
          <FaUserEdit className="text-lg" />
          <span>Edit Account</span>
        </button>
        <button
          className={`flex items-center space-x-2 py-2 px-4 ${
            activeTab === "myProfile"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("myProfile")}
        >
          <FaUserCircle className="text-lg" />
          <span>My Profile</span>
        </button>
      </div>

      <div>{renderContent()}</div>
    </div>
  );
};

export default Settings;
