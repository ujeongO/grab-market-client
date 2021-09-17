import "./App.css";
import MainPageComponent from "./main/index.js";

// 컴포넌트
// : props를 input으로 하고 UI가 어떻게 보여야 하는지 정의하는 React Element를 output으로 하는 함수이다.

// 컴포넌트 조건
//  1. 함수로 구성되어 있다.
//  2. 반드시 UI 요소를 return 해야 한다.
function App() {
  return <MainPageComponent></MainPageComponent>;
}

export default App;
