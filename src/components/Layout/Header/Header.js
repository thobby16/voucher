import React from "react";
import Icon from "../../Icon/Icon";
import "./Header.css";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo-box">
          <Link to="/">
            <img className="logo" alt="pfs logo" src={logo} />
          </Link>
        </div>
        <div className="nav-right">
          <ul className="nav-right-list">
            <li className="nav-right-list-item">
              <Icon type="bell" />
              <span className="notif-number">
                <span>1</span>
              </span>
            </li>
            <li className="nav-right-list-item">
              <Icon type="user" />
              <span className="username">kc</span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
