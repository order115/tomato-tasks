import React from "react";
import Nav from "../Nav/Nav";
import "./Header.scss";
import githubLogo from "../../img/github-logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="header__caption">Tomato Tasks</div>
          <a
            href="https://github.com/order115/tomato-tasks"
            target="_blank"
            className="header__github"
          >
            <img src={githubLogo} alt="" />
          </a>
        </div>
        <h1 className="header__title">
          Тестовое задание для поступающих на бесплатный курс по React
        </h1>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
