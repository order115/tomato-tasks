import React from "react";
import { NavLink } from "react-router-dom";
import { relative } from "path";

function Nav() {
  return (
    <nav className="header__nav">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink to={"/"} className="nav-link" exact>
            Задачи
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/about"} className="nav-link">
            Описание
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
