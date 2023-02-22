import React, { useState } from 'react';
import styles from './Counter.module.css';

//0222.md 참고

// App.jsx에서 넘어온 CounterFuntion 의 파일로 파일이름 그대로 Function 형식을 이용해 구현되어 있다.
//인자를 받을때 기본값을 바로 지정해준다. 
function Counter({ min = 1, count: initialCount = 1, max = 10, step = 1 }) {
  //매개변수로 받은 count: initialCount 를 count와 setCount에 초기화 한다.
  const [count, setCount] = useState(initialCount);

  //각 함수는 Count 값을 더하고 빼는 함수다.
  const handleIncrement = () => setCount(count + step);
  const handleDecrement = () => setCount(count - step);

  //jsx 문을 반환한다. 
  return (
    <div className={styles.container}>
      <button
        type="button"
        aria-label="카운트 1 증가"
        onClick={handleIncrement}
      >
        +
      </button>
      <output>{count}</output>
      <button
        type="button"
        aria-label="카운트 1 감소"
        onClick={handleDecrement}
      >
        -
      </button>
    </div>
  );
}

export default Counter;
