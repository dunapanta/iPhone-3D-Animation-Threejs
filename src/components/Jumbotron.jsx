import React from "react";
import Iphone from "../assets/images/iphone-14.jpg";
import HoldingIphone from "../assets/images/iphone-hand.png";

export const Jumbotron = () => {
  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title">New</h2>
      <img className="logo" src={Iphone} alt="Iphone 14" />
      <p className="text"> Big and bigger.</p>
      <span className="description">
        From $41.62/mo fror 24mo or $999 before trade-in
      </span>
      <ul className="links">
        <li>
          <button className="button">Buy</button>
        </li>
        <li>
          <button className="link">Learn more</button>
        </li>
      </ul>
      <img className="iphone-img" src={HoldingIphone} alt="Iphone 14" />
    </div>
  );
};
