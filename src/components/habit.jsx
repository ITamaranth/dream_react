import React, { Component } from "react";

class Habit extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    // state 오브젝트 안에 있는 count 를 증가한뒤 state를 업데이트 해야한다.
    // this.state.count++; 또는 this.state.count += 1 은 불가능하다.
    // react는 업데이트 되었는지 알지 못한다. 그래서 전체적인 데이터를 새로 만들어서 업데이트 해주어야한다.
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    const count = this.state.count - 1;
    // count가 0보다 작으면 ? 0을 출력하고 아니면 : count를 출력해라.
    this.setState({ count: count < 0 ? 0 : count });
  };

  render() {
    return (
      <li className="habit">
        <span className="habit-name">Reading</span>
        <span className="habit-count">{this.state.count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete">
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
