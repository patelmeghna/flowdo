import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
// import Footer from "./Footer";
import Sidebar from "./Sidebar";
import "../../../../assets/sass/index.scss";

const AdminLayout = () => {
  return (
    <div className="layout">
      <Header />
      <div className="main-content">
        <Sidebar />
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default AdminLayout;
