import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SideNav from "./SideNav";

const Layout = () => {
  return (
    <div className="layout flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 mt-44">
        <aside className="w-1/5 bg-gray-100">
          <SideNav />
        </aside>
        <main className="flex-1 p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
