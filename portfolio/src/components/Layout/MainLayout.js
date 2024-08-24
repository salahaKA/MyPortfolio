import React from "react";
import Header from "./Header";
import SideNavbar from "./SideNavbar";
import Footer from "./Footer";
import "../../styles/MainLayout.css";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header className="header" />
      
      <div className="main-content">
      <SideNavbar className="side-navbar" />
        <div className="content">{children}</div>
      </div>
      <Footer className="footer" />
    </div>
  );
};

export default MainLayout;
