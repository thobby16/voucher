import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy;precise financial systems {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
