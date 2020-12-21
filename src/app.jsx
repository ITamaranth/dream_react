import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  //리액트는 부분수정을 알아차리지 못해서, 전체적으로 복사해서 설정해주어야한다.
  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      // item을 빙글빙글 돌면서
      if (item.id === habit.id) {
        // item의 아이디가 habit의 아이디와 똑같다면,
        return { ...habit, count: habit.count + 1 }; //기존의 habit 다 복사해오고, count를 1 더한값으로 덮어쓴다.
      }
      return item; // 아이디가 다르다면, 기존의 똑같은 아이템을 이용한다.
    });
    this.setState({ habits });

    // const habits = [...this.state.habits]; // 새로운 habits 변수는 [...this.state.habits]로, state변수의 habits를 그대로 복사해서 가져온다.
    // const index = habits.indexOf(habit); // 해당인덱스를 가져온다.
    // habits[index].count++; // 인덱스로 접근해서 증가시킨다.
    // // this.setState({ habits: habits });  // habits:habits는 동일해서 habits 라고 한번만 적어도된다.
    // this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;

        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habits });
    // const habits = [...this.state.habits]; // 새로운 habits 변수는 [...this.state.habits]로, state변수의 habits를 그대로 복사해서 가져온다.
    // const index = habits.indexOf(habit); // 해당인덱스를 가져온다.
    // const count = habits[index].count - 1; // 인덱스로 접근해서 증가시킨다.
    // habits[index].count = count < 0 ? 0 : count; // 음수면 0으로 나타내기
    // this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id); // habit 이름 같아서 item이라고했음, 기존에 state에 있는 모든 habits를 돌면서 전달된 habit의 id가 아닌것들만 모아서 복사해서 const habits에 할당
    this.setState({ habits });
  };

  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };

  handleReset = (habit) => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
        // habit의 count가 0 이 아닐떄만 리턴을 해주고,
        return { ...habit, count: 0 };
      }
      return habit; // 0이라면, 기존의 habit을 리턴한다.
    });
    this.setState({ habits });
  };

  // const habits = this.state.habits.map((habit) => {
  //   habit.count = 0;
  //   return habit;
  // });
  // this.setState({ habits });

  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
