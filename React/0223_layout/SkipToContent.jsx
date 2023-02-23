import { useEffect, useRef } from 'react';
import { A11yHidden } from '@/components';

export function SkipToContent({ to, ...restProps }) {
  //초기 설정값을 null로 설정함.
  const skipToContentRef = useRef(null); // { current: null }

  let targetElement = null;

  //to="#..." 로 넘어온것을 querySelector로 잡아 
  useEffect(() => {
    targetElement = document.querySelector(to); // null

    if (targetElement) {
      //tabindex를 -1로 설정 
      targetElement.setAttribute('tabindex', -1);

      skipToContentRef.current.addEventListener('click', (e) => {
        e.preventDefault();
        targetElement && targetElement.focus();
      });
    }
  }, []);

  return (
    //ref로 skipToContentRef 의 위치를 참조할 수 있게 함. 
    //내부에는 a태그가 존재 
    <A11yHidden
      ref={skipToContentRef}
      as="a"
      focusable
      href={to}
      {...restProps}
    />
  );
}
