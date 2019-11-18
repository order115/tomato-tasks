import React from "react";
import PropTypes from "prop-types";
import "./Task.scss";
import Tomato from "../Tomato/Tomato";

function Task(props) {
  const {
    id,
    title,
    completed,
    toggleTaskStatus,
    removeTask,
    createdDate,
    tomatoCount,
    addTomato
  } = props;

  const prependZero = date => (date < 10 ? `0${date}` : date);

  const formatDate = date => {
    return `
      ${date.getDate()}.${date.getMonth()}.${date.getFullYear()} 
      | ${prependZero(date.getHours())}:${prependZero(date.getMinutes())}`;
  };

  return (
    <div
      className="col col-xs-12 col-sm-6 col-md-4"
      style={{ marginBottom: 30 }}
    >
      <article className={"task" + (completed ? " task_completed" : "")}>
        <button onClick={() => removeTask(id)} className="btn task__delete">
          &times;
        </button>

        <Tomato
          tomatoCount={tomatoCount}
          addTomato={() => addTomato(id)}
          completed={completed}
        />

        <div className="task__date">Создана: {formatDate(createdDate)}</div>
        <h5 className="task__heading">{title}</h5>
        <button
          className={`task__toggle btn btn-${completed ? "primary" : "light"}`}
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
  tomatoCount: PropTypes.number,
  createdDate: PropTypes.object,
  toggleTaskStatus: PropTypes.func,
  removeTask: PropTypes.func
};
