// Header.js
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import profile from "../assets/images/profile.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-4 lg:px-8 bg-blue-600"
        aria-label="Global"
      >
        <div className="flex">
          <img src={logo} alt="" className="h-8" />
        </div>
        <div className="flex">
          <img className="h-8 w-auto" src={profile} alt="" />
        </div>
      </nav>
      <section className="w-full h-20 bg-slate-100 flex items-center justify-center">
        <div className="w-96">
          <h3 className="text-base font-medium text-gray-800 mb-1 border-blue-700">
            Search CV
          </h3>
          <div class="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Experience in Hyderabad"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button class="px-6 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white font-medium rounded-md hover:from-blue-600 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Search
            </Button>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
