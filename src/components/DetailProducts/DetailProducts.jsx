import React from 'react'
import './DetailProducts.scss'

function ProductCard() {
  return (
    <div className="productcard">
      <div className="productcard__img">
        <img src="detail/product_01.png" alt="" />
      </div>
      <div className="productcard__text">
        <p className="productcard__name">아디다스 가젤 HP5379</p>
        <p className="productcard__price">₩ 134,000</p>
      </div>
    </div>
  )
}

function DetailProducts() {
  return (
    <div className="detailproducts">
      <p className="detailproducts__title">대표 상품</p>
      <div className="detailproducts__list">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default DetailProducts
