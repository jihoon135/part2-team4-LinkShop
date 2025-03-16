import React from 'react'
import './DetailProfile.scss'

function DetailProfile() {
  function handleToggleMore(e) {
    const $target = e.target

    if ($target.classList.contains('active')) {
      $target.classList.remove('active')
    } else {
      $target.classList.add('active')
    }
  }

  return (
    <div className="detailprofile">
      <div className="detailprofile__btnwrap">
        <div className="detailprofile__like">
          <button className="icon-btn like"></button>
          <span>65</span>
        </div>
        <div className="detailprofile__btn">
          <button className="icon-btn share"></button>
          <button className="icon-btn more" onClick={handleToggleMore}></button>
          <div className="detailprofile__more">
            <button>수정하기</button>
            <button>삭제하기</button>
          </div>
        </div>
      </div>
      <img className="detailprofile__img" src="detail/profile_red.png" alt="" />
      <p className="detailprofile__name">너구리 직구상점</p>
      <p className="detailprofile__id">@pumpkinraccoon</p>
    </div>
  )
}

export default DetailProfile
