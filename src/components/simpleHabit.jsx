import React, { useCallback, useEffect, useRef, useState } from 'react';

// rsi + tab 으로 함수형 컴포넌트 만들기, 함수이름 대문자로 바꾸기, () ⇒ {} 코드블럭으로 바꾸기
const SimpleHabit = (props) => {
  // 클래스 컴포넌트 쓸때 state 쓰는 방법
  // state = {
  //   count: 0,
  // };

  // useState() : 리액트 훅에서 state 쓰는 방법
  const [count, setCount] = useState(0); // 변수선언할 때 2개를 꼭 적어야한다. 실제의 state값인 count 와  state를 업데이트 할 수 있는 함수 setCount

  // 클래스에서 ref 사용하는방법
  // createRef 는 매번 호출할때마다 새로운 레퍼런스를 만든다.
  // const spanRef = React.createRef();

  // useRef() : 리액트훅에서 ref 사용하는 방법
  // useRef() 는 한번만 만들고 메모리에 저장해놓고 다시 재사용한다.
  const spanRef = useRef();

  // 클래스 컴포넌트 쓸때 함수 쓰는 방법
  // handleIncrement = () => {
  //   this.setState({ count: this.state.count + 1 });
  // };

  // 리액트 훅에서 함수 쓰는 방법 useCallback()
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  // 리액트에서 생명주기 쓰는 방법 useEffect()
  // useEffect는 componentDidMount , componentDidUpdate 의 경우에 다 쓸수있다.
  // 컴포넌트가 처음에 마운트 되었을 때 한번 나오고, 업데이트 될 때 호출된다.'
  // 두번째 인자에 값이 변경되었을때만 함수가 호출되도록 만들 수 있다.

  useEffect(() => {
    console.log(`count updated! : ${count}`);
  }, [count]); // [원하는데이터] 원하는데이터가 변경될때만 호출

  useEffect(() => {
    console.log(`all updated! : ${count}`);
  }); // (x) : state, props가 변경될때마다 호출

  useEffect(() => {
    console.log(`mounted`);
  }, []); // [] : 마운트 되었을때만 호출

  //클래스 컴포넌트에서 return 하는 부분을 리액트 훅에서는 함수안에 넣기
  return (
    // this 없앤다.
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
