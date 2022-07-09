import React from "react";
import "./nav.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Nav = () => {
  return (
    <div>
      <ul className="nav customnav">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">
            View Highscores
          </a>
        </li>
      </ul>
      <ul>
        <li className="position">
          <a className="nav-link" href="#">
            Time:
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
