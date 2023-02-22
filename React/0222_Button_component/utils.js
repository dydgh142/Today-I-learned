import { tokens } from './tokens';

//getColor 함수를 호출했을때 
//ex) primary/500 과 같이 영문과 숫자로 이루어져있는 문법을
//분리하고 원하는대로 가져오기 위해 if문으로 구분한다. 
//만약 /가 포함되어있지 않은 'white'과 같다면 tokens.colors를 그대로 반환한다. 
export const getColor = (colorNameAndVariant) => {
  if (colorNameAndVariant.includes('/')) {
    let [colorName, colorVariant] = colorNameAndVariant.split('/');
    return tokens.colors[colorName][colorVariant];
  } else {
    return tokens.colors[colorNameAndVariant];
  }
};
