import React from "react";
import "../MainModal/Modal.css";
import close from "../../images/close.png";

const Modal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="modal__overlay">
      <div className="modal__content">
        <div className="modal__title">
          정렬
          <img
            src={close}
            alt="모달창닫기버튼"
            className="modalclose__button"
            onClick={closeModal}
          />
        </div>

        <div className="modal__main">
          <div>최신순</div>
          <div>좋아요순</div>
          <div>등록된 상품순</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
