import React from 'react'
import './Detailpage.scss'
import DetailProfile from '../../components/DetailProfile/DetailProfile'
import DetailProducts from '../../components/DetailProducts/DetailProducts'

function DetailPage() {
  return (
    <div className="detail">
      <div className="detail__container">
        <a href="#" className="detail__back">
          돌아가기
        </a>
        <DetailProfile />
        <DetailProducts />
      </div>
    </div>
  )
}

export default DetailPage
