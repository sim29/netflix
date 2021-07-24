import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      {/* Netflix Logo */}
      <img
        className="navbar__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        width="100px"
      />
    </div>
  );
}

export default Navbar;
