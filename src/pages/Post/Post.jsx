import React from "react";
import Header from "../../components/MainHeader/Header";
import { useNavigate } from "react-router-dom";
import "../Post/Post.css";

function Post() {
  const navigate = useNavigate();
  return (
    <div>
      <Header buttonName="돌아가기" onButtonClick={() => navigate("/list")} />
      <form className="form-body">
        <div className="input-body">
          <div className="input-title">
            <h3>대표 상품</h3>
            <button>추가</button>
          </div>
          <div className="input-main">
            <div className="img-box">
              <label>
                상품 대표 이미지
                <p>상품 이미지를 첨부해 주세요.</p>
              </label>
              <div>
                <label htmlFor="img-file">파일 첨부</label>
                <input id="img-file"></input>
              </div>
            </div>
            <label>
              상품 이름
              <input placeholder="상품 이름을 입력해주세요."></input>
            </label>
            <label>
              상품 가격
              <input placeholder="원화로 표기해주세요."></input>
            </label>
          </div>

          <div className="input-main">
            <div className="img-box">
              <label>
                상품 대표 이미지
                <p>상품 이미지를 첨부해 주세요.</p>
              </label>
              <div>
                <label htmlFor="img-file">파일 첨부</label>
                <input id="img-file"></input>
              </div>
            </div>
            <label>
              상품 이름
              <input placeholder="상품 이름을 입력해주세요."></input>
            </label>
            <label>
              상품 가격
              <input placeholder="원화로 표기해주세요."></input>
            </label>
          </div>

          <h3>내 쇼핑몰</h3>
          <div className="input-myshop"></div>
          <div>
            <button>생성하기</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Post;
