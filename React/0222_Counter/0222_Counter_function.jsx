import React, { useState } from 'react';
import styles from './Counter.module.css';

//0222.md 참고

// App.jsx에서 넘어온 CounterFuntion 의 파일로 파일이름 그대로 Function 형식을 이용해 구현되어 있다.
function Counter({ min = 1, count: initialCount = 1, max = 10, step = 1 }) {
  const [count, setCount] = useState(initialCount);
  const handleIncrement = () => setCount(count + step);
  const handleDecrement = () => setCount(count - step);

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
