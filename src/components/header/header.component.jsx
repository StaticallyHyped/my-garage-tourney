import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";

const Header = ({}) => (
  <div className="header">
    <Link className="logo-container" to="/">
      LOGO
    </Link>
    <div className="options">
      <Link className="option" to="/">
        Home
      </Link>
      {/* <Link className="option">New Tournament</Link>
      <Link className="option">Ratings and History</Link>
      <Link className="option">Sign Out</Link> */}
    </div>
  </div>
);

export default Header;
