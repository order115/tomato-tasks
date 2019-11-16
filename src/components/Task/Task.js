import React from "react";
import "./Task.scss";
import PropTypes from "prop-types";
import tomato from "../../img/tomato.svg";

function Task(props) {
  return (
    <div className="col col-xs-6 col-lg-4" style={{ marginBottom: 30 }}>
      <article className={"task" + (props.completed ? " task_completed" : "")}>
        <button
          onClick={() => props.removeTask(props.id)}
          className="btn task__delete"
        >
          &times;
        </button>

        <div className="tomatos mb-3">
          <div className="tomato">
            <img src={tomato} alt="" style={{ width: 30 }} />
            <span className="count">{props.countTomato}</span>
          </div>
        </div>

        <div className="task__date">Создана: {props.date}</div>
        <h5 className="task__heading">{props.title}</h5>
        <button
          className={`task__toggle btn btn-block btn-${
            props.completed ? "primary" : "light"
          }`}
          onClick={() => props.toggleTaskStatus(props.id)}
        >
          {props.completed ? "Начать" : "Завершить"}
        </button>
      </article>
    </div>
  );
}

export default Task;

// Task.propTypes = {
//   id: PropTypes.number,
//   title: PropTypes.string,
//   completed: PropTypes.bool,
//   date: PropTypes.string || PropTypes.date,
//   toggleTaskStatus: PropTypes.func,
//   removeTask: PropTypes.func,
//   countTomato: PropTypes.number
// };
