import React from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import Navbar2 from "./navbar2";

const Layout = () => {
  
  return (
    <div className="layout1-main-container ">
      <div className="navbar-container">
      <Navbar />
      <Navbar2 />
      </div>
      <div className="outlet-container" style={{ height: "90vh" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
