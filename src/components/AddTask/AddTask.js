import React, { Component } from "react";
import PropTypes from "prop-types";
import "./AddTask.scss";

class AddTask extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.title.trim() !== "") {
      this.props.addTask(this.state);
    }
    this.setState({ title: "" });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form className="add-task mb-4" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <div className="input-group">
            <input
              type="text"
              placeholder="Новая задача"
              className="form-control"
              value={this.state.title}
              onChange={this.handleChange}
              name="title"
            />
            <div className="input-group-append">
              <button type="submit" className="btn btn-success">
                Добавить
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default AddTask;

AddTask.propTypes = {
  addTask: PropTypes.func
};
