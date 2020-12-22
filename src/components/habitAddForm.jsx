import React, { memo } from 'react'; // memo 임포트

const HabitAddForm = memo((props) => {
  // memo 쓰기
  // () -> {} 로 변경

  // const 붙여서 지역변수로 설정하기 & this 지우기 (this 없이 바로 변수에 접근 가능)
  const formRef = React.createRef(); //form 비우기 (정석)
  const inputRef = React.createRef(); // Ref 오브젝트 생성

  const onSubmit = (event) => {
    event.preventDefault(); // 브라우저 기본기능 취소 (submit새로고침 막기)
    const name = inputRef.current.value;
    name && props.onAdd(name); // name이 있다면, props의 onAdd에 name을 전달한다.
    // this.inputRef.current.value = ""; // add 후에 input창 비우기
    formRef.current.reset(); // form 비우기 (정석)
  };

  return (
    // class 컴포넌트에서 render안의 return 부분 넣기
    <form ref={formRef} onSubmit={onSubmit} className="add-form">
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
