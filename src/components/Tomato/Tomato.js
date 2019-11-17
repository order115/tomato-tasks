import React from "react";
import PropTypes from "prop-types";
import "./Tomato.scss";
import tomato from "../../img/tomato.svg";

const Tomato = ({ tomatoCount, addTomato }) => {
  return (
    <div className="tomato mb-3">
      <div className="tomato__count">
        <img
          src={tomato}
          alt=""
          style={{ width: 44 }}
          className="tomato__img"
        />
        <span>{tomatoCount}</span>
      </div>
      <button
        className="btn btn-sm btn-outline-success tomato__button"
        onClick={addTomato}
      >
        +
      </button>
    </div>
  );
};

export default Tomato;

Tomato.propTypes = {
  tomatoCount: PropTypes.number,
  addTomato: PropTypes.func
};
