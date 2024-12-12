import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SideNav = () => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("Overview");

  const menuItems = [
    { label: "Overview", route: "/" },
    { label: "Post a Job", route: "" },
    { label: "Search CV", route: "" },
    { label: "My Jobs", route: "" },
    { label: "My Searches", route: "" },
    { label: "My Candidates", route: "" },
    { label: "Billing & Invoices", route: "" },
    { label: "Settings", route: "/settings" },
    { label: "Support", route: "" },
  ];

  return (
    <aside className="bg-gray-100 h-full p-4">
      <div className="flex flex-col space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`px-4 py-2 text-left hover:bg-gray-200 ${
              activeItem === item.label
                ? "text-blue-600 bg-blue-200 border-l-4 border-blue-600"
                : "text-gray-600"
            }`}
            onClick={() => {
              setActiveItem(item.label);
              navigate(item.route);
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default SideNav;
