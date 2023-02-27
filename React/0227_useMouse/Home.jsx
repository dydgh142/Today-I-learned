import { BaseLayout, Button, Logo } from '@/components';
import classes from './Home.module.scss';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { useMouse } from '@/hooks/useMouse';

/* Component ---------------------------------------------------------------- */

//hook 만들어보기 예제 useMouse - Mouse의 좌표가 실시간으로 랜더링 됨.
export default function Home() {
  //문서 제목 변경 React 커스텀 훅
  useDocumentTitle('홈 → Likelion 4th');

  //x,y 좌표값을 받을 변수 선언
  const { x, y } = useMouse();

  return (
    //classes는 sass로 작성된 디자인 파일. 
    <BaseLayout>
      <div className={classes.container}>
        <h2 className={classes.headline}>홈 페이지</h2>
        <div style={{ marginTop: 40 }}>
          x: <span>{x}</span> / y: <span>{y}</span>
        </div>
      </div>
    </BaseLayout>
  );
}
