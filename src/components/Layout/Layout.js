import React from "react";
import Header from "../Layout/Header/Header";
import { Link } from "react-router-dom";
import "./Layout.css";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <ul className="tab-items-list">
        <li className="tab-items-list-item">
          <Link className="tab-items-list-link" to="/">
            Create Voucher
          </Link>
        </li>
        <li className="tab-items-list-item">
          <Link className="tab-items-list-link" to="/voucher-details">
            Voucher Details
          </Link>
        </li>
       
      </ul>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
