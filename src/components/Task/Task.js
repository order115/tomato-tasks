import React from "react";
import "./Task.scss";
import PropTypes from "prop-types";
import tomato from "../../img/tomato.svg";

function Task(props) {
  const { id, title, completed, toggleTaskStatus, removeTask } = props;

  return (
    <div className="col col-xs-6 col-lg-4" style={{ marginBottom: 30 }}>
      <article className={"task" + (completed ? " task_completed" : "")}>
        <button onClick={() => removeTask(id)} className="btn task__delete">
          &times;
        </button>

        <div className="tomatos mb-3">
          <div className="tomato">
            <img src={tomato} alt="" style={{ width: 30 }} />
            <span className="count">10</span>
          </div>
        </div>

        <div className="task__date">Создана: </div>
        <h5 className="task__heading">{title}</h5>
        <button
          className={`task__toggle btn btn-block btn-${
            completed ? "primary" : "light"
          }`}
          onClick={() => toggleTaskStatus(id)}
        >
          {completed ? "Начать" : "Завершить"}
        </button>
      </article>
    </div>
  );
}

export default Task;

Task.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  completed: PropTypes.bool,
  toggleTaskStatus: PropTypes.func,
  removeTask: PropTypes.func
};
