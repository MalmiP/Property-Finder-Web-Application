import React from "react";
import "./Header.css";

/* Header component displaying the logo and title */
function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img
          src="/images/logo.jpg"
          alt="Property Finder Logo"
          className="header-logo"
        />
        <h1 className="header-title">Visionary Homes</h1>
      </div>
      <div className="header-right">
        <p className="header-description">
          Find your dream property easily with us.
        </p>
      </div>
    </header>
  );
}

export default Header;
