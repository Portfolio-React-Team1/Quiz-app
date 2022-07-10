import React from "react";
import "./nav.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Nav = () => {
  return (
    <div>
      <ul className="nav customnav">
        <li className="nav-item">
          <a className="custom-nav-link " aria-current="page" href="Highscores">
            View Highscores
          </a>
        </li>
      </ul>
      <ul>
        <li className="position">
          <a className="custom-nav-link" href="#">
            Time:
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
