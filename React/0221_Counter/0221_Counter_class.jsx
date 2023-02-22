import { Component } from 'react';

//0222.md 참고 

// App.jsx에서 넘어온 CounterClass 의 파일로 파일이름 그대로 클래스 형식을 갖고 구현되어 있다. 
class Counter extends Component {
  //props의 기본값.
  static defaultProps = {
    count: 1,
    min: 1,
    max: 10,
    step: 1,
  };

  //count는 넘어온 해당 props의 count 를 받은 변수이다.
  state = {
    count: this.props.count,
  };

  //랜더링을 시작할 때 현재 상태에 저장되어있는 count 값을 상수로 고정한다.
  render() {
    const { count } = this.state;

    //jsx 구문을 반환시킨다. 내부에서 발생한 함수는 밑에서 설명한다.
    return (
      <div className="Counter">
        <button
          type="button"
          onClick={this.handleInc}
          aria-label="카운트 1 증가"
        >
          +
        </button>
        <output>{count}</output>
        <button
          type="button"
          onClick={this.handleDec}
          aria-label="카운트 1 감소"
        >
          -
        </button>
      </div>
    );
  }

  //handleleInc는 count를 step 기준으로 증가시키는 함수이다. 
  handleInc = () => {
    this.setState({
      count: this.state.count + this.props.step,
    });
  };

  //handleDec는 count를 step 기준으로 감소시키는 함수이다.
  handleDec = () => {
    this.setState({
      count: this.state.count - this.props.step,
    });
  };
}

//해당 Counter 클래스를 defalut 값으로 export 시켜 index.js에서 받아 App.jsx로 간다.
export default Counter;
