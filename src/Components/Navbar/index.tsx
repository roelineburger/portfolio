import React, { useEffect, forwardRef } from "react";
import logo from "./logo1.png";
import "./styles.css";

const Navbar = ({ scrollToPortfolio }: any) => {
  return (
    <div className="header">
      <img className="header-logo" src={logo} alt="logo" />
      <h4 className="header-menu">Home</h4>
      <h4 className="header-menu" onClick={scrollToPortfolio}>
        Work
      </h4>
      <h4 className="header-menu">Contact</h4>
    </div>
  );
};

export default Navbar;
