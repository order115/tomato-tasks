import React from "react";
import Nav from "../Nav/Nav";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__caption">Tomato Tasks</div>
        <h1 className="header__title">
          Тестовое задание для поступающих на бесплатный курс по React
        </h1>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
