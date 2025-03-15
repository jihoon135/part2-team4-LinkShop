// BackButton.jsx
import React from 'react';
import './BackButton.css'; // CSS 파일을 import합니다.

const BackButton = () => {
    return (
        <button className="back-button">
            <img src="back.png"x alt="Back" className="back-button-image" />
            <span className="back-button-text">돌아가기</span>
        </button>
    );
};

export default BackButton;
