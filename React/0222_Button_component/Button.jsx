import classes from './Button.module.css';
import { getColor } from '@/theme/utils';

//인자를 받으며 함수 밖에서 defaultProps를 이용해 기본값을 지정함.
export function Button({
  mode,
  secondary: isSecondary,
  disabled,
  ...restProps
}) {
  //classes는 Button.modile.css를 의미함
  //style에서 !isSecondary는 mode가 primary인지를 판별한다.
  //primary일땐 getColor('primary/500') 과 getColor('white')를 받아옴
  return (
    <button
      type="button"
      className={classes.component}
      style={{
        backgroundColor: !isSecondary
          ? getColor('primary/500')
          : getColor('primary/50'),
        color: !isSecondary ? getColor('white') : getColor('primary/400'),
      }}
      {...restProps}
    />
  );
}

Button.defaultProps = {
  mode: 'primary', // 'secondary'
  secondary: false,
  disabled: false,
};
