import React, { useState } from "react";
import { FaUserEdit, FaUserCircle } from "react-icons/fa";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

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
    setSelectedOptions((prev) =>
      prev.includes(id)
        ? prev.filter((optionId) => optionId !== id)
        : [...prev, id]
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
            <h1 className="my-3">Account</h1>
            <div>
              <h2 className="my-2">Notification</h2>
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  <h2 className="my-2">Change Password</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex flex-col">
                      <label className="my-2">Current Password</label>
                      <TextField
                        label="Current Password"
                        variant="outlined"
                        type={showPassword ? "text" : "password"}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={handleTogglePasswordVisibility}
                                edge="end"
                                aria-label={
                                  showPassword
                                    ? "Hide password"
                                    : "Show password"
                                }
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="my-2">New Password</label>
                      <TextField
                        label="New Password"
                        variant="outlined"
                        type={showPassword ? "text" : "password"}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={handleTogglePasswordVisibility}
                                edge="end"
                                aria-label={
                                  showPassword
                                    ? "Hide password"
                                    : "Show password"
                                }
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="my-2">Confirm Password</label>
                      <TextField
                        label="Confirm Password"
                        variant="outlined"
                        type={showPassword ? "text" : "password"}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={handleTogglePasswordVisibility}
                                edge="end"
                                aria-label={
                                  showPassword
                                    ? "Hide password"
                                    : "Show password"
                                }
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end py-4">
                    <Button variant="contained">Save Changes</Button>
                  </div>
                </div>
                <hr />
                <div>
                  <h2 className="my-2">Make My Account Inactive</h2>
                  <p>
                    If you deactivate your account, you will stop receiving
                    updatyes on new features and regular communications from
                    Skillety as part of the services. Log in to your account
                    again to reactivate it
                  </p>
                  <div className=" py-4">
                    <Button variant="contained" startIcon={<CloseIcon />}>
                      Deactivate Account
                    </Button>
                  </div>
                </div>
                <hr />
                <div className="my-2">
                  <h2 className="my-2">Delete My Account</h2>
                  <p>
                    If you dekete your Skillety account, you will no longer
                    receive Information about the matched jobs, followed
                    employes, job alerts, shotlisted jobs and more You will lose
                    access to all services on Skillety.
                  </p>
                  <div className=" py-4">
                    <Button variant="contained" startIcon={<CloseIcon />}>
                      Delete Account
                    </Button>
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
