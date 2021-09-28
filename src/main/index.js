// CSS 파일은 따로 export 한 것이 없음 > from을 적지 않는다.
import "./index.css";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function MainPage() {
  // 1.
  const [products, setProducts] = React.useState([]);

  // 2.
  React.useEffect(function () {
    axios
      .get(
        "https://b5589888-fdf0-487a-b3eb-6282099e782c.mock.pstmn.io/products/"
      )
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.error("에러 발생: ", error);
      });
    // useEffect 두 번째 인자(배열)에 값이 없으면 한 번만 로딩된다.
  }, []);

  // 3.
  return (
    // 여러개 태그 return 안됨 → <div>로 씌워서 return 한다.
    <div>
      <div id="banner">
        <img src="images/banners/banner1.png" alt="배너 이미지" />
      </div>
      <h1>판매되는 상품들</h1>
      <div id="product-list">
        {products.map(function (product, index) {
          return (
            <div className="product-card">
              <Link
                style={{ color: "inherit" }}
                className="product-link"
                to={`/products/${product.id}`}
              >
                <div>
                  <img
                    className="product-img"
                    alt="물건 이미지"
                    src={product.imageUrl}
                  />
                </div>
                <div className="product-contents">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price}원</span>
                  <div className="product-seller">
                    <img
                      className="product-avatar"
                      alt="판매자 이미지"
                      src="images/icons/avatar.png"
                    />
                    <span>{product.seller}</span>
                  </div>
                </div>
              </Link>
            </div> /* /.product-card */
          );
        })}
      </div>
    </div>
  );
}

export default MainPage;
