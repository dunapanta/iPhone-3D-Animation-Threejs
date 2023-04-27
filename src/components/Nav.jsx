import React from "react";
import Logo from "../assets/images/favicon.ico";
import Search from "../assets/images/search.svg";
import Store from "../assets/images/store.svg";

export const Nav = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <img src={Logo} alt="Logo" width={40} height={40} />
          </li>
          <li>
            <a className="link-styled">Store</a>
          </li>
          <li>
            <a className="link-styled">Mac</a>
          </li>
          <li>
            <a className="link-styled">iPad</a>
          </li>
          <li>
            <a className="link-styled">iPhone</a>
          </li>
          <li>
            <a className="link-styled">Watch</a>
          </li>
          <li>
            <a className="link-styled">Airpods</a>
          </li>
          <li>
            <a className="link-styled">Accesories</a>
          </li>
          <li>
            <a className="link-styled">Watch</a>
          </li>
          <li>
            <a className="link-styled">Support</a>
          </li>
          <li>
            <img src={Search} alt="Search" />
          </li>
          <li>
            <img src={Store} alt="Store" />
          </li>
        </ul>
      </div>
    </nav>
  );
};
