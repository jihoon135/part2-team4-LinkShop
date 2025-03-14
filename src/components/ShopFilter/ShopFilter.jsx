import React from "react";
import filterBtn from "../../images/Frame 2609124.png";
import { useState } from "react";
import "../ShopFilter/ShopFilter.css";
import Modal from "../MainModal/Modal";

function ShopFilter() {
  const [buttonText, setButtonText] = useState("상세 필터");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="filter__container">
      <div className="filter__box">
        <span className="filter__span">{buttonText}</span>
        <button onClick={openModal} className="filter__button">
          <img src={filterBtn} alt="필터 버튼" className="button" />
        </button>
      </div>
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
}

export default ShopFilter;
