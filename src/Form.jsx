import React, { Component } from "react";
import "./Form.css";
class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      task: "",
    };
  }
  handleTaskChange = (e) => {
    this.setState({ task: e.target.value });
  };
  handleAddTodo = (e) => {
    e.preventDefault();

    const { task, todos } = this.state;
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: task,
    };
    this.setState({
      todos: [...todos, newTodo],
      task: "",
    });
  };
  render() {
    const { task, todos } = this.state;

    return (
      <div>
        <form>
          <div>
            <label>Enter The Task:</label>

            <input type="text" value={task} onChange={this.handleTaskChange} />
          </div>
          <button type="submit" onClick={this.handleAddTodo}>
            Add
          </button>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                {todo.text}
                <button onClick={this.handleDelTodo}>Del</button>
              </li>
            ))}
          </ul>
        </form>
      </div>
    );
  }
}

export default Form;
