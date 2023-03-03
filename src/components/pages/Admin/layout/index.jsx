import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import "../../../../assets/sass/admin/index.scss";
// import Footer from "./Footer";
import Sidebar from "./Sidebar";

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
