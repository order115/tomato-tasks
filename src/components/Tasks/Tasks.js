import React, { Component } from "react";
import tasksData from "../../data/tasksData";
import Task from "../Task/Task";
import AddTask from "../AddTask/AddTask";
import emptyTasks from "../../img/empty-tasks.svg";

class Tasks extends Component {
  constructor() {
    super();
    this.state = {
      tasks: tasksData
    };

    this.toggleTaskStatus = this.toggleTaskStatus.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.addTomato = this.addTomato.bind(this);
    this.setTomatoTimer = this.setTomatoTimer.bind(this);
  }

  componentDidMount() {}

  /**
   * Переключение статуса задачи
   * @param {number} id ID задачи
   */
  toggleTaskStatus(id) {
    this.setState(prevState => {
      const updatedTasks = prevState.tasks.map(task => {
        if (task.id === id) task.completed = !task.completed;
        return task;
      });

      return {
        tasks: updatedTasks
      };
    });
  }

  /**
   * Удаление задачи из массива
   * @param {number} id ID задачи
   */
  removeTask(id) {
    this.setState(prevState => {
      return {
        tasks: prevState.tasks.filter(task => task.id !== id)
      };
    });
  }

  addTask(newTask) {
    newTask = {
      ...newTask,
      id: Math.floor(Math.random() * 1e4),
      completed: false,
      createdDate: new Date(),
      tomatoCount: 0
    };
    this.setState(prevState => {
      return {
        tasks: [newTask, ...prevState.tasks]
      };
    });
  }

  setTomatoTimer(duration = 25 * 60 * 1e3) {
    setTimeout(() => {
      console.log("Times over");
    }, duration);
  }

  addTomato(id) {
    this.setState(prevState => {
      const updatedTasks = prevState.tasks.map(task => {
        if (task.id === id) task.tomatoCount++;
        return task;
      });

      return {
        tasks: updatedTasks
      };
    });

    this.setTomatoTimer(3000);
  }

  render() {
    const { tasks } = this.state;

    const taskComponent = tasks.map(task => (
      <Task
        key={task.id}
        id={task.id}
        completed={task.completed}
        title={task.title}
        createdDate={task.createdDate}
        tomatoCount={task.tomatoCount}
        removeTask={this.removeTask}
        toggleTaskStatus={this.toggleTaskStatus}
        addTomato={this.addTomato}
      />
    ));

    const tasksEmpty = (
      <div className="text-center col col-xs-12 pt-3">
        <img src={emptyTasks} alt="" style={{ height: 200 }} />
        <h3>Список задач пуст</h3>
      </div>
    );

    return (
      <div>
        <AddTask addTask={this.addTask} />

        <section className="tasks row">
          {tasks.length ? taskComponent : tasksEmpty}
        </section>
      </div>
    );
  }
}

export default Tasks;
