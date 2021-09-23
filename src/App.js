import "./App.css";
import MainPageComponent from "./main/index.js";
import { Switch, Route } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";

// 컴포넌트
// : props를 input으로 하고 UI가 어떻게 보여야 하는지 정의하는 React Element를 output으로 하는 함수이다.

// 컴포넌트 조건
//  1. 함수로 구성되어 있다.
//  2. 반드시 UI 요소를 return 해야 한다.
function App() {
  return (
    <div>
      <Switch>
        {/* path에 있는 해당 경로로 들어갔을 때 <MainPageComponent />를 실행시킨다 */}
        <Route exact={true} path="/">
          <MainPageComponent />
        </Route>
        <Route exact={true} path="/products/:id">
          <ProductPage />
        </Route>
        <Route exact={true} path="/upload">
          <UploadPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
