import React from 'react';
import { useShopContext } from '../../contexts/ShopContext';
import './Modal.scss';
import close from '../../assets/images/close.png';

const Modal = () => {
  const { isModalOpen, toggleModal, setOrderBy, orderBy } = useShopContext();

  if (!isModalOpen) return null; // 모달이 열려있지 않으면 렌더링하지 않음

  return (
    <>
      <div className="modal__overlay" onClick={toggleModal}>
        <div className="modal__box">
          <div className="modal__detail">
            <p className="modal__sorting">정렬</p>
            <button
              className={`sort__button ${orderBy === 'recent' ? 'selected' : ''}`}
              onClick={() => setOrderBy('recent')}
            >
              최신순
            </button>
            <hr />
            <button
              className={`sort__button ${orderBy === 'likes' ? 'selected' : ''}`}
              onClick={() => setOrderBy('likes')}
            >
              좋아요순
            </button>
            <hr />
            <button
              className={`sort__button ${orderBy === 'productsCount' ? 'selected' : ''}`}
              onClick={() => setOrderBy('productsCount')}
            >
              등록된 상품순
            </button>
            <hr />
            <button className="modal__closeButton">
              <img src={close} alt="close"></img>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
