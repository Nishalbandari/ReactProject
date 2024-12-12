import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SideNav from "./SideNav";

const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="layout flex flex-col h-screen">
      <Header onToggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />

      <div className="flex flex-1 mt-[9rem]">
        <aside
          className={`absolute left-0 w-3/4 sm:w-1/5 bg-gray-100 z-40 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 sm:relative sm:translate-x-0`}
        >
          <SideNav />
        </aside>

        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        <main className="flex-1 p-4 overflow-auto">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
