import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SideNav = () => {
  const navigate = useNavigate();
  return (
    <aside className="bg-gray-100 h-full p-4">
      <div className="flex flex-col space-y-2">
        <button className="px-4 py-2 text-left hover:bg-gray-200">
          Overview
        </button>
        <button className="px-4 py-2 text-left hover:bg-gray-200">
          Post a Job
        </button>
        <button className="px-4 py-2 text-left hover:bg-gray-200">
          Search CV
        </button>
        <button className="px-4 py-2 text-left hover:bg-gray-200">
          My Jobs
        </button>
        <button className="px-4 py-2 text-left hover:bg-gray-200">
          My Searches
        </button>
        <button
          className="px-4 py-2 text-left hover:bg-gray-200"
          onClick={() => navigate("/settings")}
        >
          My Candidates
        </button>
        <button
          className="px-4 py-2 text-left hover:bg-gray-200"
          onClick={() => navigate("/settings")}
        >
          Billing & Invoices
        </button>
        <button
          className="px-4 py-2 text-left hover:bg-gray-200"
          onClick={() => navigate("/settings")}
        >
          Settings
        </button>
        <button className="px-4 py-2 text-left hover:bg-gray-200">
          Support
        </button>
      </div>
    </aside>
  );
};

export default SideNav;
