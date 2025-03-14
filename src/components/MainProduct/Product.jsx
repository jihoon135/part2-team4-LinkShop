import React from "react";
import profileImage from "../../images/image.png";
import productImage1 from "../../images/Rectangle 158.png";
import productImage2 from "../../images/Rectangle 172.png";
import productImage3 from "../../images/Rectangle 173.png";
import LikeButton from "../MainLikeButton/LikeButton";
import "../MainProduct/Product.css";

function Product() {
  return (
    <div className="product__info">
      <div className="product__container">
        <div className="product__profile">
          <img className="profile__img" src={profileImage} />
          <div className="profile__name">
            <h2 className="profile__shopname">너구리 직구상점</h2>
            <p className="profile__id">@pumpkinraccoon</p>
          </div>
          <LikeButton />
        </div>
        <div className="product__list">
          <p className="product__list__text">대표 상품 3</p>
          <div className="product__list__img">
            <img className="product__item" src={productImage1} />
            <img className="product__item" src={productImage2} />
            <img className="product__item" src={productImage3} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
