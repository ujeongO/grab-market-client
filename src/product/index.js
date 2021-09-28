import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(
    function () {
      axios
        .get(
          `https://b5589888-fdf0-487a-b3eb-6282099e782c.mock.pstmn.io/products/${id}`
        )
        .then(function (result) {
          setProduct(result.data);
          // console.log(result);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    [id]
  );

  if (product === null) {
    return <h1>상품 정보를 받고 있습니다...</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imageUrl} alt="상세 이미지" />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" alt="프로필 이미지" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createdAt">2021년 9월 23일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;
