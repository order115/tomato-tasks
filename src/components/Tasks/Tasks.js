import React, { Component } from "react";
import Task from "../Task/Task";
import AddTask from "../AddTask/AddTask";

class Tasks extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          id: 0,
          title: "Реализация намеченных плановых заданий",
          completed: false
        }
      ]
    };

    this.toggleTaskStatus = this.toggleTaskStatus.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.addTask = this.addTask.bind(this);
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
      id: Math.floor(Math.random() * 1000),
      completed: false
    };
    this.setState(prevState => {
      return {
        tasks: [...prevState.tasks, newTask]
      };
    });
  }

  render() {
    const { tasks } = this.state;
    const taskComponent = tasks.map(task => (
      <Task
        key={task.id}
        id={task.id}
        completed={task.completed}
        title={task.title}
        removeTask={this.removeTask}
        toggleTaskStatus={this.toggleTaskStatus}
      />
    ));

    return (
      <div>
        <AddTask addTask={this.addTask} />

        <section className="tasks row">
          {tasks.length ? taskComponent : "empty"}
        </section>
      </div>
    );
  }
}

export default Tasks;
