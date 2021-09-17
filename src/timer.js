import React from "react";

function TimerComponent() {
  // 1. time에는 기본 값으로 0이 들어간다. 신기해 보이는 문법은 ES6의 destructuring이다.
  // → useState의 인자 0 = 기본 값
  // 기본 값(0)이 들어간 순간, 첫 번째 인자(time) 값 = 0으로 시작
  const [time, setTime] = React.useState(0); // time이 업데이트 될 때마다 계속 호출된다.
  console.log("컴포넌트 업데이트");
  React.useEffect(function () {
    setTime(time + 1);
  }, []);

  return (
    <div>
      <h3>{time}초</h3>
      {/* 클릭할 때마다 setTime으로 state를 업데이트 해준다. */}
      <button>1씩 올려주세요</button>
    </div>
  );
}

export default TimerComponent;
