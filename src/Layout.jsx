import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideNav from "./components/SideNav";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <div style={{ display: "flex" }}>
        <SideNav style={{ width: "20%" }} />
        <main style={{ flex: 1, padding: "1rem" }}>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
