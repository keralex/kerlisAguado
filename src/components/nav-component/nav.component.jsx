import React from "react";
import "../nav-component/nav.style.scss";

const Nav = () => (
  <div className="navbar">
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Projects</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  </div>
);

export default Nav;
