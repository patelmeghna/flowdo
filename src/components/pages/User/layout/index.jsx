import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import "../../../../assets/sass/user/index.scss";
// import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout = () => {
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

export default Layout;
