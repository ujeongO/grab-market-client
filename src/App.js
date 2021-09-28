import "antd/dist/antd.css";
import "./App.css";
import MainPageComponent from "./main/index.js";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

// 컴포넌트
// : props를 input으로 하고 UI가 어떻게 보여야 하는지 정의하는 React Element를 output으로 하는 함수이다.

// 컴포넌트 조건
//  1. 함수로 구성되어 있다.
//  2. 반드시 UI 요소를 return 해야 한다.
function App() {
  const history = useHistory();
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="/images/icons/logo.png" alt="로고 이미지" />
          </Link>
          <Button
            size="large"
            onClick={function () {
              // 해당 사이트에서 다른 경로로 이동하겠다 하는 명령어
              history.push("/upload");
            }}
            icon={<DownloadOutlined />}
          >
            상품 업로드
          </Button>
        </div>
      </div>
      <div id="body">
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
      <div id="footer"></div>
    </div>
  );
}

export default App;
