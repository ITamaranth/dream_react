import React, { Component } from "react";

class HabitAddForm extends Component {
  formRef = React.createRef(); //form 비우기 (정석)
  inputRef = React.createRef(); // Ref 오브젝트 생성

  onSubmit = (event) => {
    event.preventDefault(); // 브라우저 기본기능 취소 (submit새로고침 막기)
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name); // name이 있다면, props의 onAdd에 name을 전달한다.
    // this.inputRef.current.value = ""; // add 후에 input창 비우기
    this.formRef.current.reset(); // form 비우기 (정석)
  };
  render() {
    return (
      <form ref={this.formRef} onSubmit={this.onSubmit} className="add-form">
        <input
          ref={this.inputRef} // 원하는 요소에 ref 전달하기
          type="text"
          className="add-input"
          placeholder="Habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
