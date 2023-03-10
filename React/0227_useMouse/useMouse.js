import { useState, useEffect } from 'react';

// 에너테이션 Annotation

/**
 * 사용자의 마우스 x, y위치 값을 반환하는 React 커스텀 훅
 * @returns {{ x: number, y: number }} 마우스 x, y 위치
 */
export function useMouse() {
  const [x, updateX] = useState(0);
  const [y, updateY] = useState(0);

  //마우스가 움직일때마다 마우스 좌표를 업데이트
  useEffect(() => {
    const EVENT_TYPE = 'mousemove';
    const handleMouseMove = (e) => {
      updateX(e.pageX);
      updateY(e.pageY);
    };

    // 이벤트 구독 (subscription)
    globalThis.addEventListener(EVENT_TYPE, handleMouseMove);

    // 이벤트 구독 해지 (clean up)
    return () => {
      globalThis.removeEventListener(EVENT_TYPE, handleMouseMove);
    };
  }, []);

  return { x, y };
}
