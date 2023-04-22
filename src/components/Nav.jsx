import React from "react";
import Logo from "../assets/images/favicon.ico";

export const Nav = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <img src={Logo} alt="Logo" width={40} height={40} />
          </li>
        </ul>
      </div>
    </nav>
  );
};
