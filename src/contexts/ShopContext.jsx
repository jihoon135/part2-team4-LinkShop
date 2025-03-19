import React, { createContext, useState, useContext } from 'react';

// Context 생성
const ShopContext = createContext();

// Context Provider 컴포넌트
export const ShopProvider = ({ children }) => {
  // 상태 관리
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderBy, setOrderBy] = useState('recent'); // 초기값을 'recent'로 설정

  // 모달 열기/닫기 함수
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <ShopContext.Provider
      value={{ isModalOpen, toggleModal, orderBy, setOrderBy }}
    >
      {children}
    </ShopContext.Provider>
  );
};

// Context 값을 사용할 수 있게 하는 훅
export const useShopContext = () => useContext(ShopContext);
